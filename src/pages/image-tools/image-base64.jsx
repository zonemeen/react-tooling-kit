import { useState } from 'react'
import { CopyButton } from '@/components/Button'
import { CodeBlock } from '@/components/CodeBlock'
import { Layout } from '@/components/Layout'
import { Column, TwoColumns } from '@/components/TwoColumns'

export default function ImageToBase64() {
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
        <Column title="Image">
          <input type="file" accept="image/*" onChange={handleChange} />
          {result && (
            <div className="mt-5">
              <img src={result} />
            </div>
          )}
        </Column>
        <Column
          title="Result"
          renderRight={() => <CopyButton getValue={() => result} />}
        >
          {result && (
            <div>
              {result.length > 500 && (
                <div className="mb-1 text-zinc-400">
                  Too large, only showing the first 500 characters:
                </div>
              )}
              <CodeBlock
                code={`${result.slice(0, 500)}${
                  result.length > 500 ? `...` : ``
                }`}
              />
            </div>
          )}
        </Column>
      </TwoColumns>
    </Layout>
  )
}
