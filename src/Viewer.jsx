import React from 'react'
import PropTypes from 'prop-types'
import { Pdf, Docx, Xlsx, Audio, Video, Unsupported } from './components'

const Viewer = (props) => {
  const { fileType } = props

  switch (fileType) {
    case 'pdf': {
      return <Pdf {...props} />
    }
    case 'docx': {
      return <Docx {...props} />
    }
    case 'xlsx': {
      return <Xlsx {...props} />
    }
    case 'mp3':
    case 'aac':
    case 'wav':
    case 'flac':
    case 'm4a':
    case 'ogg': {
      return <Audio {...props} />
    }
    case 'webm':
    case 'mp4': {
      return <Video {...props} />
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
  style: null,
  unsupportedComponent: null,
}

export default Viewer
