import React, { useEffect, useState } from 'react'
import mammoth from 'mammoth'
import { htmlToPdf } from '../utils/utils'
import docxStyle from '../utils/docxStyle'
import Pdf from './Pdf'

const Docx = (props) => {
  const { src, style } = props
  const [url, setUrl] = useState('')
  useEffect(() => {
    const fileRequest = new XMLHttpRequest()
    fileRequest.open('GET', src, true)
    fileRequest.send()
    fileRequest.responseType = 'arraybuffer'
    fileRequest.onreadystatechange = async () => {
      if (fileRequest.readyState === 4 && fileRequest.status === 200) {
        const requestResult = await mammoth.convertToHtml(
          { arrayBuffer: fileRequest.response },
          { includeDefaultStyleMap: true }
        )
        const opt = {
          margin: 0.8,
          image: { type: 'jpeg', quality: 1 },
          jsPDF: { unit: 'cm', format: 'letter', orientation: 'p' },
        }
        let html = requestResult.value
        html += docxStyle
        const res = await htmlToPdf(html, opt)
        setUrl(res)
      }
    }
  }, [src])

  return <Pdf src={url} style={style} />
}

export default Docx
