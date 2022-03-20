import React from 'react'
import DiffFiles from '../components/DiffFiles'

export default function Docx() {
  const mimeType =
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  return <DiffFiles mimeType={mimeType} fileType="docx" />
}
