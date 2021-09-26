import React, { useEffect, useState } from 'react'
import axios from 'axios'
import mammoth from 'mammoth'
import { htmlToPdf } from '../utils/utils'
import docxStyle from '../utils/docxStyle'
import Iframe from './Iframe'

const Docx = ({ src, style }) => {
  const [url, setUrl] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(src, {
        responseType: 'arraybuffer',
      })
      const opt = {
        margin: 0.8,
        image: { type: 'jpeg', quality: 1 },
        jsPDF: { unit: 'cm', format: 'letter', orientation: 'p' },
      }
      let { value: html } = await mammoth.convertToHtml({
        arrayBuffer: data,
      })
      html += docxStyle
      setUrl(await htmlToPdf(html, opt))
    }
    fetchData()
  }, [src])

  return <Iframe src={url} style={style} />
}

export default Docx
