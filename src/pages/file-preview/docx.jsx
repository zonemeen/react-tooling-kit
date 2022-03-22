import React from 'react'
import DiffFiles from '../../components/DiffFiles'

export default function Docx() {
  return (
    <DiffFiles
      title="docx"
      mimeType="application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      allowedFileTypes="docx"
    />
  )
}
