import React from 'react'
import Viewer from './Viewer'

const pdf =
  'https://file-examples-com.github.io/uploads/2017/10/file-example_PDF_1MB.pdf'

const App = () => {
  return (
    <div>
      <Viewer fileType="pdf" src={pdf} style={{ height: 900 }} />
    </div>
  )
}

export default App
