import React from 'react'
import DiffFiles from '../../components/DiffFiles'

export default function Pptx() {
  return (
    <DiffFiles
      title="pptx"
      mimeType="application/vnd.openxmlformats-officedocument.presentationml.presentation"
      allowedFileTypes="pptx"
    />
  )
}
