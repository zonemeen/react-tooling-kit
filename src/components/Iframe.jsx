import React from 'react'
import Loading from '../Loading'

const Iframe = ({ src, style, className, isHtml = false }) => {
  return (
    <div>
      {!src && <Loading />}
      {src && (
        <iframe
          title="myFrame"
          className={className}
          style={style}
          src={isHtml ? undefined : src}
          srcDoc={isHtml ? src : undefined}
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
