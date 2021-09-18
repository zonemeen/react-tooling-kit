import React from 'react'
import PropTypes from 'prop-types'
import { Pdf, Docx, Unsupported } from './components'

const Viewer = (props) => {
  const { fileType } = props

  switch (fileType) {
    case 'pdf': {
      return <Pdf {...props} />
    }
    case 'docx': {
      return <Docx {...props} />
    }
    default: {
      return <Unsupported {...props} />
    }
  }
}

const { string, object, element } = PropTypes

Viewer.propTypes = {
  fileType: string.isRequired,
  src: string.isRequired,
  style: object,
  unsupportedComponent: element,
}

Viewer.defaultProps = {
  style: { width: '100%', height: 500 },
  unsupportedComponent: null,
}

export default Viewer
