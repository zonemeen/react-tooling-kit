import React from 'react'
import Viewer from './Viewer'

import jpg from './samples/sample.jpg'
import docx from './samples/sample.docx'
import pdf from './samples/sample.pdf'
import xlsx from './samples/sample.xlsx'
import pptx from './samples/sample.pptx'
import mp3 from './samples/sample.mp3'
import mp4 from './samples/sample.mp4'

const App = () => {
  return (
    <div>
      <h1>JPG</h1>
      <Viewer fileType="jpg" src={jpg} />
      <h1>DOCX</h1>
      <Viewer fileType="docx" src={docx} />
      <h1>PDF</h1>
      <Viewer fileType="pdf" src={pdf} />
      <h1>XLSX</h1>
      <Viewer fileType="xlsx" src={xlsx} />
      <h1>PPTX</h1>
      <Viewer fileType="pptx" src={pptx} />
      <h1>MP3</h1>
      <Viewer fileType="mp3" src={mp3} />
      <h1>MP4</h1>
      <Viewer fileType="mp4" src={mp4} />
    </div>
  )
}

export default App
