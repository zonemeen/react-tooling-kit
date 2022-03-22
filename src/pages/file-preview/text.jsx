import React, { useState } from 'react'
import { Layout } from '../../components/Layout'
import { Column, TwoColumns } from '../../components/TwoColumns'
import Viewer from '../../components/Viewer'
import { readText } from '../../utils/utils'

export default function Text() {
  const [result, setResult] = useState('')
  const [type, setType] = useState('')

  const handleChange = async (e) => {
    const file = e.target.files[0]
    const { name } = file
    setType(name.slice(name.lastIndexOf('.') + 1))
    const textData = await readText(file)
    setResult(textData)
  }

  return (
    <Layout>
      <TwoColumns>
        <Column title="text">
          <input type="file" onChange={handleChange} />
        </Column>
        <Column title="Result">
          {result && <Viewer fileType={type} src={result} />}
        </Column>
      </TwoColumns>
    </Layout>
  )
}
