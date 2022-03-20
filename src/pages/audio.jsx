import React from 'react'
import DiffFiles from '../components/DiffFiles'

export default function Docx() {
  const mimeType = 'audio/*'
  return <DiffFiles mimeType={mimeType} fileType="audio" isOfficeFile={false} />
}
