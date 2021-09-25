import React, { useEffect, useState } from 'react'
import axios from 'axios'
import mammoth from 'mammoth'
import { htmlToPdf } from '../utils/utils'
import docxStyle from '../utils/docxStyle'
import Pdf from './Pdf'

const Docx = ({ src, style }) => {
  const [url, setUrl] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(src, {
        responseType: 'arraybuffer',
      })
      const htmlResult = await mammoth.convertToHtml({
        arrayBuffer: response.data,
      })
      const opt = {
        margin: 0.8,
        image: { type: 'jpeg', quality: 1 },
        jsPDF: { unit: 'cm', format: 'letter', orientation: 'p' },
      }
      let html = htmlResult.value
      html += docxStyle
      const objectUrl = await htmlToPdf(html, opt)
      setUrl(objectUrl)
    }
    fetchData()
  }, [src])

  return <Pdf src={url} style={style} />
}

export default Docx
