import React from 'react'
import Loading from '../Loading'
import { FileViewerProps } from '@/types'

const Iframe: React.FC<FileViewerProps> = ({
  src,
  style,
  className,
  isHtml = false,
}) => {
  return (
    <div>
      {!src && <Loading />}
      {src && (
        <iframe
          title="myFrame"
          className={className}
          style={{
            ...style,
            border: '1px solid #d6d6d6',
          }}
          src={isHtml ? undefined : src + '#toolbar=0'}
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
