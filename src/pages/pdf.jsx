import React from 'react'
import DiffFiles from '../components/DiffFiles'

export default function Pdf() {
  const mimeType = 'application/pdf'
  return <DiffFiles mimeType={mimeType} fileType="pdf" />
}
