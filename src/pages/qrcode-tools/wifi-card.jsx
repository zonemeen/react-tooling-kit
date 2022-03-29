import React, { useEffect } from 'react'
import QRCode from 'qrcode.react'
import domtoimage from 'dom-to-image'
import { Layout } from '@/components/Layout'
import { DownloadButton } from '@/components/Button'
import { Column, TwoColumns } from '@/components/TwoColumns'
import { Input, Radio, CheckBox } from '@/components/Input'

export default function QrcodeGenerator() {
  const [qrcode, setQrcode] = React.useState('')
  const [settings, setSettings] = React.useState({
    ssid: '',
    password: '',
    encryptionMode: 'WPA',
    hiddenSSID: false,
  })
  const encryptionModes = [
    { label: 'None', value: '' },
    { label: 'WPA/WPA2/WPA3', value: 'WPA' },
    { label: 'WEP', value: 'WEP' },
  ]
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
  const escape = (v) => {
    const needsEscape = ['"', ';', ',', ':', '\\']

    let escaped = ''
    for (const c of v) {
      if (needsEscape.includes(c)) {
        escaped += `\\${c}`
      } else {
        escaped += c
      }
    }
    return escaped
  }

  useEffect(() => {
    const ssid = escape(settings.ssid)
    const password = !settings.encryptionMode ? '' : escape(settings.password)
    setQrcode(
      `WIFI:T:${settings.encryptionMode};S:${ssid};P:${password};H:${settings.hiddenSSID};`
    )
  }, [settings])

  const onEncryptionModeChange = (encryptionMode) => {
    setSettings({ ...settings, encryptionMode })
  }
  const onSSIDChange = (ssid) => {
    setSettings({ ...settings, ssid })
  }
  const onPasswordChange = (password) => {
    setSettings({ ...settings, password })
  }
  const onHiddenSSIDChange = (hiddenSSID) => {
    setSettings({ ...settings, hiddenSSID })
  }
  return (
    <Layout>
      <TwoColumns>
        <Column>
          <Input
            title="Network name"
            placeholder="Wifi Network Name"
            onChange={onSSIDChange}
          />
          {settings.encryptionMode && (
            <Input
              title="Password"
              placeholder="Password"
              onChange={onPasswordChange}
            />
          )}
          <CheckBox options={['Hidden SSID']} onChange={onHiddenSSIDChange} />
          <Radio
            title="Encryption"
            defaultValue={settings.encryptionMode}
            options={encryptionModes}
            onChange={onEncryptionModeChange}
          />
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
