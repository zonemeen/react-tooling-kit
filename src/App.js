import React from 'react'
import Viewer from './Viewer'

import mp4 from './samples/sample.mp4'

const App = () => {
  return (
    <div>
      <Viewer fileType="mp4" src={mp4} />
    </div>
  )
}

export default App
