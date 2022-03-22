import React from 'react'
import DiffFiles from '../../components/DiffFiles'

export default function Pdf() {
  return (
    <DiffFiles title="pdf" mimeType="application/pdf" allowedFileTypes="pdf" />
  )
}
