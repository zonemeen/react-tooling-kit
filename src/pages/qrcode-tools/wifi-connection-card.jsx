import React, { useEffect } from 'react'
import QRCode from 'qrcode.react'
import domtoimage from 'dom-to-image'
import { Layout } from '@/components/Layout'
import { DownloadButton } from '@/components/Button'
import { Column, TwoColumns } from '@/components/TwoColumns'
import { Input, Radio, CheckBox } from '@/components/Input'
import { ErrorMessage } from '@/components/ErrorMessage'

export default function WifiConnectionCard() {
  const [qrcode, setQrcode] = React.useState('')
  const [settings, setSettings] = React.useState({
    ssid: '',
    password: '',
    encryptionMode: 'WPA',
    hiddenSSID: false,
  })
  const [errors, setErrors] = React.useState({
    ssidError: '',
    passwordError: '',
  })
  const encryptionModes = [
    { label: 'None', value: '' },
    { label: 'WPA/WPA2/WPA3', value: 'WPA' },
    { label: 'WEP', value: 'WEP' },
  ]
  const onDownloadClick = async () => {
    if (!settings.ssid.length) {
      setErrors({
        ...errors,
        ssidError: 'Network name cannot be empty',
      })
      return
    }
    if (settings.password.length < 8 && settings.encryptionMode === 'WPA') {
      setErrors({
        ...errors,
        passwordError:
          'Password must be at least 8 characters, or change the encryption to "None"',
      })
      return
    }
    if (settings.password.length < 5 && settings.encryptionMode === 'WEP') {
      setErrors({
        ...errors,
        passwordError:
          'Password must be at least 5 characters, or change the encryption to "None"',
      })
      return
    }
    const node = document.getElementById('qrcode')
    const blob = await domtoimage.toBlob(node, {
      height: node.offsetHeight,
      width: node.offsetWidth,
    })
    saveAs(blob, 'qrcode.png')
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
    setErrors({
      ...errors,
      passwordError: '',
    })
    setSettings({ ...settings, encryptionMode })
  }
  const onSSIDChange = (ssid) => {
    setErrors({
      ...errors,
      ssidError: '',
    })
    setSettings({ ...settings, ssid })
  }
  const onPasswordChange = (password) => {
    setErrors({
      ...errors,
      passwordError: '',
    })
    setSettings({ ...settings, password })
  }
  const onHiddenSSIDChange = (hiddenSSID) => {
    setSettings({ ...settings, hiddenSSID })
  }
  return (
    <Layout>
      <TwoColumns>
        <Column title="Setting">
          <Input
            title="Network name"
            placeholder="Wifi Network Name"
            onChange={onSSIDChange}
          />
          <ErrorMessage className="mb-2" message={errors.ssidError} />
          {settings.encryptionMode && (
            <>
              <Input
                title="Password"
                placeholder="Password"
                onChange={onPasswordChange}
              />
              <ErrorMessage message={errors.passwordError} />
            </>
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
