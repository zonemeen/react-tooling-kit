import React, { useState } from 'react'
import { Layout } from './Layout'
import { Column, TwoColumns } from './TwoColumns'
import Viewer from '../components/Viewer'

export default function Audio({ mimeType, fileType }) {
  const [result, setResult] = useState('')
  const [type, setType] = useState('')

  const handleChange = (e) => {
    setResult('')
    const file = e.target.files[0]
    const { type } = file
    setType(type.slice(type.lastIndexOf('/') + 1))
    const reader = new FileReader()
    reader.onloadend = () => {
      setResult(reader.result.toString())
    }
    reader.onerror = (err) => {
      alert(err)
    }
    reader.readAsDataURL(file)
  }

  return (
    <Layout>
      <TwoColumns>
        <Column title={fileType}>
          <input type="file" accept={mimeType} onChange={handleChange} />
        </Column>
        <Column title="Result">
          {result && <Viewer fileType={type} src={result} />}
        </Column>
      </TwoColumns>
    </Layout>
  )
}
