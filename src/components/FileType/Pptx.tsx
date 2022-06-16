import React, { useEffect } from 'react'
import axios from 'axios'
import { FileViewerProps } from '@/types'

const Pptx: React.FC<FileViewerProps> = ({ src, style, className }) => {
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(src, {
        responseType: 'blob',
      })
      const objectUrl = URL.createObjectURL(data)
      // @ts-ignore
      $('#result').pptxToHtml({
        pptxFileUrl: objectUrl,
      })
    }
    fetchData()
  }, [src])

  return <div id="result" style={style} className={className} />
}

export default Pptx
