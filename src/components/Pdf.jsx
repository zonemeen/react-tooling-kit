import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loading from '../Loading'

const Pdf = ({ src, style, fileType }) => {
  const [url, setUrl] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      if (fileType === 'pdf') {
        try {
          const file = await axios.get(src, {
            responseType: 'blob',
          })
          const objectUrl = URL.createObjectURL(file.data)
          setUrl(objectUrl)
        } catch (error) {
          throw error
        }
      } else {
        setUrl(src)
      }
    }
    fetchData()
  }, [src, fileType])
  return (
    <div>
      {!src && <Loading />}
      {src && (
        <iframe
          title="myFrame"
          style={{ width: '100%', height: 600, ...style }}
          src={url}
        >
          <p>
            It appears you don't have a PDF plugin for this browser. No
            biggie... you can{' '}
            <a href={url}>click here to download the PDF file.</a>
          </p>
        </iframe>
      )}
    </div>
  )
}

export default Pdf
