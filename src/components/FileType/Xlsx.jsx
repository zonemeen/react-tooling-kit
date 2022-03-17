import React, { useEffect, useState } from 'react'
import axios from 'axios'
import XLSX from 'xlsx'
import { workbookToHtml } from '../../utils/utils'
import Iframe from './Iframe'

const Xlsx = ({ src, style, className }) => {
  const [url, setUrl] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(src, {
        responseType: 'arraybuffer',
      })
      const arrData = new Uint8Array(data)
      const workbook = XLSX.read(arrData, { type: 'array' })
      setUrl(workbookToHtml(workbook))
    }
    fetchData()
  }, [src])

  return <Iframe src={url} style={style} className={className} isHtml={true} />
}

export default Xlsx
