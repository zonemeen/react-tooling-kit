import React, { useEffect, useState } from 'react'
import axios from 'axios'
import XLSX from 'xlsx'
import { readWorkbook } from '../utils/utils'
import Iframe from './Iframe'

const Xlsx = (props) => {
  const { src, style } = props
  const [url, setUrl] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(src, {
        responseType: 'arraybuffer',
      })
      const data = new Uint8Array(response.data)
      const workbook = XLSX.read(data, { type: 'array' })
      const objectUrl = await readWorkbook(workbook)
      setUrl(objectUrl)
    }
    fetchData()
  }, [src])

  return <Iframe src={url} style={style} />
}

export default Xlsx
