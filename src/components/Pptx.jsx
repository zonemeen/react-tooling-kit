import React, { useEffect } from 'react'
import axios from 'axios'
import '../styles/nv.d3.scss'
import '../styles/pptxjs.scss'

const Pptx = ({ src, style, className }) => {
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(src, {
        responseType: 'blob',
      })
      const objectUrl = URL.createObjectURL(data)
      // eslint-disable-next-line no-undef
      $('#result').pptxToHtml({
        pptxFileUrl: objectUrl,
      })
    }
    fetchData()
  }, [src])

  return <div id="result" style={style} className={className} />
}

export default Pptx
