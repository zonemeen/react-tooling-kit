import React from 'react'
import Viewer from './Viewer'

import xlsx from './samples/sample.xlsx'

const App = () => {
  return (
    <div>
      <Viewer
        fileType="xlsx"
        src={xlsx}
        style={{ width: '100%', height: 900 }}
      />
    </div>
  )
}

export default App
