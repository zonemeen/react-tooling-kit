import React from 'react'
import Viewer from './Viewer'

import mp3 from './samples/sample.mp3'

const App = () => {
  return (
    <div>
      <Viewer fileType="mp3" src={mp3} />
    </div>
  )
}

export default App
