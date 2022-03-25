import React, { useState } from 'react'
import JSZip from 'jszip'
import axios from 'axios'
import { saveAs } from 'file-saver'
import { Layout } from '@/components/Layout'
import { Column, TwoColumns } from '@/components/TwoColumns'
import { Button } from '@/components/Button'
import Loading from '@/components/Loading'

export default function Zip() {
  const [blobContent, setBlobContent] = useState(null)
  const [uploadFiles, setUploadFiles] = useState(null)
  const handleChange = (e) => {
    setBlobContent(null)
    setUploadFiles(null)
    const zip = new JSZip()
    const files = Array.from(e.target.files)
    files.length && setUploadFiles(files)
    const fileReaderList = []
    files.map((file) => {
      const reader = new FileReader()
      reader.onloadend = () => {
        fileReaderList.push({ name: file.name, result: reader.result })
        if (fileReaderList.length === files.length) {
          Promise.all(
            fileReaderList.map(async (item) => {
              const { data } = await axios.get(item.result, {
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
          <input type="file" multiple={true} onChange={handleChange} />
          {uploadFiles && (
            <div className="pt-2">
              {uploadFiles.map((file) => (
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
              <Button onClick={() => saveAs(blobContent, 'Files.zip')}>
                Download
              </Button>
            )}
          </div>
        </Column>
      </TwoColumns>
    </Layout>
  )
}
