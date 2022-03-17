import React, { useState } from 'react'
import { Layout } from '../components/Layout'
import { Column, TwoColumns } from '../components/TwoColumns'
import Viewer from '../components/Viewer'

export default function Audio() {
  const [result, setResult] = useState('')
  const [type, setType] = useState('')

  const handleChange = (e) => {
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
        <Column title="Audio">
          <input type="file" accept="audio/*" onChange={handleChange} />
        </Column>
        <Column title="Result">
          {result && <Viewer fileType={type} src={result} />}
        </Column>
      </TwoColumns>
    </Layout>
  )
}
