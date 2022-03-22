import React from 'react'
import DiffFiles from '../../components/DiffFiles'

export default function Docx() {
  return (
    <DiffFiles
      title="video"
      mimeType="video/*"
      allowedFileTypes="webm,mp4"
      isOfficeFile={false}
    />
  )
}
