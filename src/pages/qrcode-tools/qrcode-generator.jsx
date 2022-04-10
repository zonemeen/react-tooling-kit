import React from 'react'
import QRCode from 'qrcode.react'
import domtoimage from 'dom-to-image'
import { Layout } from '@/components/Layout'
import { ErrorMessage } from '@/components/ErrorMessage'
import { CopyButton, DownloadButton } from '@/components/Button'
import { Column, TwoColumns } from '@/components/TwoColumns'

export default function QrcodeGenerator() {
  const [input, setInput] = React.useState('')
  const [error, setError] = React.useState('')
  const [qrcode, setQrcode] = React.useState('')

  const onInputChange = async (e) => {
    setInput(e.target.value)
    try {
      setQrcode(e.target.value)
    } catch (err) {
      setError(err.message)
      console.error(err)
    }
  }
  const onDownloadClick = async () => {
    const node = document.getElementById('qrcode')
    if (node) {
      const blob = await domtoimage.toBlob(node, {
        height: node.offsetHeight,
        width: node.offsetWidth,
      })
      saveAs(blob, 'qrcode.png')
    }
  }

  return (
    <Layout>
      <TwoColumns>
        <Column
          title="Input"
          renderRight={() => <CopyButton getValue={() => input} />}
        >
          <textarea
            rows={10}
            id="input-el"
            className="w-full input"
            value={input}
            onChange={onInputChange}
          />
          <ErrorMessage className="mt-2" message={error} />
        </Column>
        <Column
          title="QR Code"
          renderRight={
            qrcode
              ? () => <DownloadButton onClick={onDownloadClick} />
              : undefined
          }
        >
          {qrcode && (
            <div className="flex justify-center">
              <QRCode id="qrcode" value={qrcode} size={150} />
            </div>
          )}
        </Column>
      </TwoColumns>
    </Layout>
  )
}
