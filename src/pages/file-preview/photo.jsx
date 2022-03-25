import React from 'react'
import DiffFiles from '@/components/DiffFiles'

export default function Docx() {
  return (
    <DiffFiles
      title="photo"
      mimeType="image/*"
      allowedFileTypes="jpg,jpeg,gif,png"
      isOfficeFile={false}
    />
  )
}
