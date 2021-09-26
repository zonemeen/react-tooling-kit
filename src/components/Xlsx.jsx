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
      const { data } = await axios.get(src, {
        responseType: 'arraybuffer',
      })
      const arrData = new Uint8Array(data)
      const workbook = XLSX.read(arrData, { type: 'array' })
      setUrl(await readWorkbook(workbook))
    }
    fetchData()
  }, [src])

  return <Iframe src={url} style={style} />
}

export default Xlsx
