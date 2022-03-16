import React from 'react'
import Viewer from './Viewer'

import jpg from './samples/sample.jpg'
import docx from './samples/sample.docx'
import pdf from './samples/sample.pdf'
import xlsx from './samples/sample.xlsx'
import pptx from './samples/sample.pptx'
import mp3 from './samples/sample.mp3'
import mp4 from './samples/sample.mp4'

const gif = 'https://miqilin-blog.oss-cn-shenzhen.aliyuncs.com/sample.gif'
const docxUrl = 'https://miqilin-blog.oss-cn-shenzhen.aliyuncs.com/sample.docx'
const pdfUrl = 'https://miqilin-blog.oss-cn-shenzhen.aliyuncs.com/sample.pdf'
const xlsxUrl = 'https://miqilin-blog.oss-cn-shenzhen.aliyuncs.com/sample.xlsx'
const mp3Url = 'https://miqilin-blog.oss-cn-shenzhen.aliyuncs.com/sample.mp3'
const mp4Url = 'https://miqilin-blog.oss-cn-shenzhen.aliyuncs.com/sample.mp4'

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
          width: '40%',
          height: 800,
        }}
        fileType="xlsx"
        src={xlsx}
      />
      <h1>XLSX-Online</h1>
      <Viewer
        style={{
          width: '40%',
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
