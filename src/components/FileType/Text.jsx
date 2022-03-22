import React from 'react'

const Text = ({ src, style, className }) => {
  return (
    <pre style={style} className={className + ' code-area'}>
      {src}
    </pre>
  )
}

export default Text
