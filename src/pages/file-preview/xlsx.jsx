import React from 'react'
import DiffFiles from '@/components/DiffFiles'

export default function Xlsx() {
  return (
    <DiffFiles
      title="xlsx"
      mimeType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      allowedFileTypes="xlsx"
    />
  )
}
