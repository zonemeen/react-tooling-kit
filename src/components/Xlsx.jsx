import React, { useEffect, useState } from 'react'
import XLSX from 'xlsx'
import { readWorkbook } from '../utils/utils'
import Pdf from './Pdf'

const Xlsx = (props) => {
  const { src, style } = props
  const [url, setUrl] = useState('')
  useEffect(() => {
    const fileRequest = new XMLHttpRequest()
    fileRequest.open('GET', src, true)
    fileRequest.send()
    fileRequest.responseType = 'arraybuffer'
    fileRequest.onreadystatechange = async () => {
      if (fileRequest.readyState === 4 && fileRequest.status === 200) {
        const data = new Uint8Array(fileRequest.response)
        const workbook = XLSX.read(data, { type: 'array' })
        const res = await readWorkbook(workbook)
        setUrl(res)
      }
    }
  }, [src])

  return <Pdf src={url} style={style} />
}

export default Xlsx
