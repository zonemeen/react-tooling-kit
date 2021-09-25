import React from 'react'
import Viewer from './Viewer'

import pdf from './samples/sample.pdf'

const App = () => {
  return (
    <div>
      <h1>PDF</h1>
      <Viewer fileType="pdf" src={pdf} />
    </div>
  )
}

export default App
