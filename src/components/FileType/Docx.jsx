import React, { useEffect } from 'react'
import axios from 'axios'
import { defaultOptions, renderAsync } from 'docx-preview'

const Docx = ({ src, style, className }) => {
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(src, {
        responseType: 'arraybuffer',
      })
      const docxOptions = Object.assign(defaultOptions, {
        debug: true,
        experimental: true,
      })
      const bodyContainer = document.getElementById('result')
      await renderAsync(data, bodyContainer, null, docxOptions)
    }
    fetchData()
  }, [src])

  return <div id="result" />
}

export default Docx
