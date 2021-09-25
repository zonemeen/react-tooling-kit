import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Iframe from './Iframe'

const Pdf = ({ src, style }) => {
  const [url, setUrl] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      const file = await axios.get(src, {
        responseType: 'blob',
      })
      const objectUrl = URL.createObjectURL(file.data)
      setUrl(objectUrl)
    }
    fetchData()
  }, [src])
  return <Iframe src={url} style={style} />
}

export default Pdf
