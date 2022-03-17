import React, { useState } from 'react'
import { Layout } from '../components/Layout'
import { Column, TwoColumns } from '../components/TwoColumns'
import Viewer from '../components/Viewer'

export default function Xlsx() {
  const [result, setResult] = useState('')

  const handleChange = (e) => {
    const file = e.target.files[0]
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
        <Column title="Xlsx">
          <input
            type="file"
            accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            onChange={handleChange}
          />
        </Column>
        <Column title="Result">
          {result && (
            <Viewer
              className="w-full"
              style={{ height: 'calc(100vh - 100px)' }}
              fileType="xlsx"
              src={result}
            />
          )}
        </Column>
      </TwoColumns>
    </Layout>
  )
}
