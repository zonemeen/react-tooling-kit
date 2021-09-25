import React from 'react'
import Loading from '../Loading'

const Iframe = ({ src, style }) => {
  return (
    <div>
      {!src && <Loading />}
      {src && (
        <iframe
          title="myFrame"
          style={{
            width: '100%',
            height: 800,
            ...style,
          }}
          src={src}
        >
          <p>
            It appears you don't have a PDF plugin for this browser. No
            biggie... you can{' '}
            <a href={src}>click here to download the PDF file.</a>
          </p>
        </iframe>
      )}
    </div>
  )
}

export default Iframe
