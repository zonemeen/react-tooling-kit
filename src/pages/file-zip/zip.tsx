import React, { useState } from 'react'
import JSZip from 'jszip'
import axios from 'axios'
import { saveAs } from 'file-saver'
import { Layout } from '@/components/Layout'
import { Column, TwoColumns } from '@/components/TwoColumns'
import { DownloadButton } from '@/components/Button'
import Loading from '@/components/Loading'

interface FileReaderListType {
  name: string
  result: string | ArrayBuffer | null
}

export default function Zip() {
  const [blobContent, setBlobContent] = useState<Blob | null>(null)
  const [uploadFiles, setUploadFiles] = useState<File[] | null>(null)
  const onFilesInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBlobContent(null)
    setUploadFiles(null)
    const zip = new JSZip()
    const fileList = e.target.files
    if (!fileList) return
    const files = Array.from(fileList)
    files.length && setUploadFiles(files)
    const fileReaderList: FileReaderListType[] = []
    files.map((file) => {
      const reader = new FileReader()
      reader.onloadend = () => {
        fileReaderList.push({ name: file.name, result: reader.result })
        if (fileReaderList.length === files.length) {
          Promise.all(
            fileReaderList.map(async (item) => {
              const { data } = await axios.get(String(item.result), {
                responseType: 'blob',
              })
              zip.file(`${item.name}`, data)
            })
          ).then(() => {
            zip.generateAsync({ type: 'blob' }).then((content) => {
              setBlobContent(content)
            })
          })
        }
      }
      reader.onerror = (err) => {
        alert(err)
      }
      reader.readAsDataURL(file)
    })
  }

  return (
    <Layout>
      <TwoColumns>
        <Column title="zip">
          <input type="file" multiple={true} onChange={onFilesInputChange} />
          {uploadFiles && (
            <div className="pt-2">
              {uploadFiles.map((file: File) => (
                <p className="pt-1" key={file.name}>
                  {file.name}
                </p>
              ))}
            </div>
          )}
        </Column>
        <Column title="Result">
          <div className="pt-4">
            {!blobContent && !uploadFiles && <div />}
            {!blobContent && uploadFiles && <Loading />}
            {blobContent && uploadFiles && (
              <DownloadButton
                onClick={() => saveAs(blobContent, 'Files.zip')}
              />
            )}
          </div>
        </Column>
      </TwoColumns>
    </Layout>
  )
}
