import React from 'react'
import Viewer from './Viewer'

import jpg from './samples/sample.jpg'

const App = () => {
  return <Viewer fileType="jpg" src={jpg} />
}

export default App
