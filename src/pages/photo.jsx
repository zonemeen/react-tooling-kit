import React from 'react'
import DiffFiles from '../components/DiffFiles'

export default function Docx() {
  const mimeType = 'image/*'
  return <DiffFiles mimeType={mimeType} fileType="photo" isOfficeFile={false} />
}
