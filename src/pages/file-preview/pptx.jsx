import React from 'react'
import DiffFiles from '../../components/DiffFiles'

export default function Pptx() {
  const mimeType =
    'application/vnd.openxmlformats-officedocument.presentationml.presentation'
  return <DiffFiles mimeType={mimeType} fileType="pptx" />
}
