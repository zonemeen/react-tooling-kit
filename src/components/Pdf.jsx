import React, { useEffect, useState } from 'react'
import Loading from '../Loading'

const Pdf = (props) => {
  const { src, style, fileType } = props
  const [url, setUrl] = useState('')
  useEffect(() => {
    if (fileType === 'pdf') {
      const fileRequest = new XMLHttpRequest()
      fileRequest.open('GET', src, true)
      fileRequest.send()
      fileRequest.responseType = 'blob'
      fileRequest.onreadystatechange = () => {
        if (fileRequest.readyState === 4 && fileRequest.status === 200) {
          const res = URL.createObjectURL(fileRequest.response)
          setUrl(res)
        }
      }
    } else {
      setUrl(src)
    }
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
