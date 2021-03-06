import React, { useState } from 'react'
import { Layout } from './Layout'
import { Column, TwoColumns } from './TwoColumns'
import Viewer from './Viewer'

interface DiffFilesProps {
  title: string
  mimeType: string
  allowedFileTypes: string
  isOfficeFile?: boolean
}

const DiffFiles: React.FC<DiffFilesProps> = ({
  title,
  mimeType,
  allowedFileTypes,
  isOfficeFile = true,
}) => {
  const [result, setResult] = useState('')
  const [type, setType] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResult('')
    const file = e.target.files![0]
    const { name } = file
    const type = name.slice(name.lastIndexOf('.') + 1)
    if (allowedFileTypes.includes(type)) {
      setType(type)
    } else {
      setType(`${type} is not supported or matched.`)
    }
    const reader = new FileReader()
    reader.onloadend = () => {
      reader.result && setResult(reader.result.toString())
    }
    reader.onerror = (err) => {
      alert(err)
    }
    reader.readAsDataURL(file)
  }

  return (
    <Layout>
      <TwoColumns>
        <Column title={title}>
          <input type="file" accept={mimeType} onChange={handleChange} />
        </Column>
        <Column title="Result">
          {result && (
            <Viewer
              className={isOfficeFile ? 'w-full' : ''}
              style={{ height: isOfficeFile ? 'calc(100vh - 100px)' : '' }}
              fileType={type}
              src={result}
            />
          )}
        </Column>
      </TwoColumns>
    </Layout>
  )
}

export default DiffFiles
