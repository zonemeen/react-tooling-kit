import React from 'react'
import Viewer from './Viewer'

import docx from './samples/sample.docx'

const App = () => {
  return (
    <div>
      <Viewer
        fileType="docx"
        src={docx}
        style={{ width: '100%', height: 900 }}
      />
    </div>
  )
}

export default App
