import React from 'react'
import DiffFiles from '@/components/DiffFiles'

export default function Docx() {
  return (
    <DiffFiles
      title="audio"
      mimeType="audio/*"
      allowedFileTypes="mp3,mpeg,aac,wav,flac,m4a,ogg"
      isOfficeFile={false}
    />
  )
}
