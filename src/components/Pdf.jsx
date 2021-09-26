import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Iframe from './Iframe'

const Pdf = ({ src, style }) => {
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
  return <Iframe src={url} style={style} />
}

export default Pdf
