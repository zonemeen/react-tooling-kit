import React from 'react'
import DiffFiles from '../../components/DiffFiles'

export default function Docx() {
  const mimeType = 'video/*'
  return <DiffFiles mimeType={mimeType} fileType="video" isOfficeFile={false} />
}
