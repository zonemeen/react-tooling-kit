import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { read, utils } from 'xlsx'
import Iframe from './Iframe'
import xlsxStyle from '@/utils/xlsxStyle'
import { FileViewerProps } from '@/types'

const Xlsx: React.FC<FileViewerProps> = ({ src, style, className }) => {
  const [url, setUrl] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(src, {
        responseType: 'arraybuffer',
      })
      const workBookData = read(data)
      const workSheetData = workBookData.Sheets[workBookData.SheetNames[0]]
      const html = utils.sheet_to_html(workSheetData) + xlsxStyle
      setUrl(html)
    }
    fetchData()
  }, [src])

  return <Iframe src={url} style={style} className={className} isHtml={true} />
}

export default Xlsx
