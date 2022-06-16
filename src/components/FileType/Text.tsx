import React from 'react'
import { FileViewerProps } from '@/types'

const Text: React.FC<FileViewerProps> = ({ src, style, className }) => {
  return (
    <pre style={style} className={className + ' code-area'}>
      {src}
    </pre>
  )
}

export default Text
