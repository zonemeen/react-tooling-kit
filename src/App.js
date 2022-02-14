import React from 'react'
import Viewer from './Viewer'

import jpg from './samples/sample.jpg'
import docx from './samples/sample.docx'
import pdf from './samples/sample.pdf'
import xlsx from './samples/sample.xlsx'
import pptx from './samples/sample.pptx'
import mp3 from './samples/sample.mp3'
import mp4 from './samples/sample.mp4'

const gif = 'https://blog.hubspot.com/hubfs/Smiling%20Leo%20Perfect%20GIF.gif'
const docxUrl =
  'https://file-examples-com.github.io/uploads/2017/02/file-sample_100kB.docx'
const pdfUrl =
  'https://file-examples-com.github.io/uploads/2017/10/file-sample_150kB.pdf'
const xlsxUrl =
  'https://file-examples-com.github.io/uploads/2017/02/file_example_XLSX_50.xlsx'
const mp3Url =
  'https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3'
const mp4Url =
  'https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_640_3MG.mp4'

const App = () => {
  return (
    <div>
      <h1>JPG</h1>
      <Viewer fileType="jpg" src={jpg} />
      <h1>GIF-Online</h1>
      <Viewer fileType="gif" src={gif} />
      <h1>DOCX</h1>
      <Viewer
        style={{
          width: '50%',
          height: 800,
        }}
        fileType="docx"
        src={docx}
      />
      <h1>DOCX-Online</h1>
      <Viewer
        style={{
          width: '50%',
          height: 800,
        }}
        fileType="docx"
        src={docxUrl}
      />
      <h1>PDF</h1>
      <Viewer
        style={{
          width: '100%',
          height: 800,
        }}
        fileType="pdf"
        src={pdf}
      />
      <h1>PDF-Online</h1>
      <Viewer
        style={{
          width: '100%',
          height: 800,
        }}
        fileType="pdf"
        src={pdfUrl}
      />
      <h1>XLSX</h1>
      <Viewer
        style={{
          width: '50%',
          height: 800,
        }}
        fileType="xlsx"
        src={xlsx}
      />
      <h1>XLSX-Online</h1>
      <Viewer
        style={{
          width: '50%',
          height: 800,
        }}
        fileType="xlsx"
        src={xlsxUrl}
      />
      <h1>PPTX</h1>
      <Viewer fileType="pptx" src={pptx} />
      <h1>MP3</h1>
      <Viewer fileType="mp3" src={mp3} />
      <h1>MP3-Online</h1>
      <Viewer fileType="mp3" src={mp3Url} />
      <h1>MP4</h1>
      <Viewer fileType="mp4" src={mp4} />
      <h1>MP4-Online</h1>
      <Viewer fileType="mp4" src={mp4Url} />
    </div>
  )
}

export default App
