import React from 'react'
import Viewer from './Viewer'

import pdf from './samples/sample.pdf'

const App = () => {
  return (
    <div>
      <Viewer fileType="pdf" src={pdf} style={{ height: 900 }} />
    </div>
  )
}

export default App
