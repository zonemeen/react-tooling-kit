import React from 'react'
import DiffFiles from '../../components/DiffFiles'

export default function Xlsx() {
  const mimeType =
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  return <DiffFiles mimeType={mimeType} fileType="xlsx" />
}
