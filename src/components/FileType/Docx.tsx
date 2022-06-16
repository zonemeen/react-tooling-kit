import React, { useEffect, useState } from 'react'
import axios from 'axios'
import mammoth from 'mammoth'
import docxStyle from '@/utils/docxStyle'
import { FileViewerProps } from '@/types'
import Iframe from './Iframe'

const Docx: React.FC<FileViewerProps> = ({ src, style, className }) => {
  const [html, setHtml] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(src, {
        responseType: 'arraybuffer',
      })
      let { value: htmlStr } = await mammoth.convertToHtml({
        arrayBuffer: data,
      })
      htmlStr += docxStyle
      setHtml(htmlStr)
    }
    fetchData()
  }, [src])

  return <Iframe src={html} style={style} className={className} isHtml={true} />
}

export default Docx
