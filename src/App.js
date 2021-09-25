import React from 'react'
import Viewer from './Viewer'

import pptx from './samples/sample.pptx'

const App = () => {
  return (
    <div>
      <Viewer fileType="pptx" src={pptx} />
    </div>
  )
}

export default App
