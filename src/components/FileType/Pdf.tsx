import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Iframe from './Iframe'
import { FileViewerProps } from '@/types'

const Pdf: React.FC<FileViewerProps> = ({ src, style, className }) => {
  const [url, setUrl] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(src, {
        responseType: 'blob',
      })
      setUrl(URL.createObjectURL(data))
    }
    fetchData()
  }, [src])
  return <Iframe src={url} style={style} className={className} isHtml={false} />
}

export default Pdf
