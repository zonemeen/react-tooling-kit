import React, { useEffect } from 'react'
import QRCode from 'qrcode.react'
import domtoimage from 'dom-to-image'
import { saveAs } from 'file-saver'
import { Layout } from '@/components/Layout'
import { DownloadButton } from '@/components/Button'
import { Column, TwoColumns } from '@/components/TwoColumns'
import { Input, Radio, CheckBox } from '@/components/Input'
import { ErrorMessage } from '@/components/ErrorMessage'

export default function WifiConnectionCard() {
  const [qrcode, setQrcode] = React.useState('')
  const [settings, setSettings] = React.useState({
    networkName: '',
    password: '',
    encryptionMode: 'WPA',
    hiddenNetworkName: false,
  })
  const [errors, setErrors] = React.useState({
    networkNameError: '',
    passwordError: '',
  })
  const encryptionModes = [
    { label: 'None', value: '' },
    { label: 'WPA/WPA2/WPA3', value: 'WPA' },
    { label: 'WEP', value: 'WEP' },
  ]

  const onDownloadClick = async () => {
    if (!settings.networkName.length) {
      setErrors({
        ...errors,
        networkNameError: 'Network name cannot be empty',
      })
      return
    }
    if (settings.password.length < 8 && settings.encryptionMode === 'WPA') {
      setErrors({
        ...errors,
        passwordError:
          'The password of WPA encryption must be at least 8 characters, or change the encryption to "None"',
      })
      return
    }
    if (settings.password.length < 5 && settings.encryptionMode === 'WEP') {
      setErrors({
        ...errors,
        passwordError:
          'The password of WEP encryption must be at least 5 characters, or change the encryption to "None"',
      })
      return
    }
    const node = document.getElementById('qrcode')!
    const blob = await domtoimage.toBlob(node, {
      height: node.offsetHeight,
      width: node.offsetWidth,
    })
    saveAs(blob, 'qrcode.png')
  }

  const escape = (v: string) => {
    const escapedList = ['"', ';', ',', ':', '\\']
    let escaped = ''
    for (const c of v) {
      if (escapedList.includes(c)) {
        escaped += `\\${c}`
      } else {
        escaped += c
      }
    }
    return escaped
  }

  useEffect(() => {
    const networkName = escape(settings.networkName)
    const password = !settings.encryptionMode ? '' : escape(settings.password)
    setQrcode(
      `WIFI:T:${settings.encryptionMode};S:${networkName};P:${password};H:${settings.hiddenNetworkName};`
    )
  }, [settings])

  const onEncryptionModeChange = (encryptionMode: string) => {
    setErrors({
      ...errors,
      passwordError: '',
    })
    setSettings({ ...settings, encryptionMode })
  }
  const onNetworkNameChange = (networkName: string) => {
    setErrors({
      ...errors,
      networkNameError: '',
    })
    setSettings({ ...settings, networkName })
  }
  const onPasswordChange = (password: string) => {
    if (
      (settings.password.length >= 8 && settings.encryptionMode === 'WPA') ||
      (settings.password.length >= 5 && settings.encryptionMode === 'WEP')
    ) {
      setErrors({
        ...errors,
        passwordError: '',
      })
    }
    setSettings({ ...settings, password })
  }
  const onHiddenNetworkNameChange = (hiddenNetworkName: boolean) => {
    setSettings({ ...settings, hiddenNetworkName })
  }
  return (
    <Layout>
      <TwoColumns>
        <Column title="Setting">
          <Input
            title="Network name"
            placeholder="Wifi Network Name"
            onInputChange={onNetworkNameChange}
          />
          <ErrorMessage className="mb-2" message={errors.networkNameError} />
          {settings.encryptionMode && (
            <>
              <Input
                title="Password"
                placeholder="Password"
                onInputChange={onPasswordChange}
              />
              <ErrorMessage message={errors.passwordError} />
            </>
          )}
          <CheckBox
            options={['Hidden NetworkName']}
            onInputChange={onHiddenNetworkNameChange}
          />
          <Radio
            title="Encryption"
            defaultValue={settings.encryptionMode}
            options={encryptionModes}
            onInputChange={onEncryptionModeChange}
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
