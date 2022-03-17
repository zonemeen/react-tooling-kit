import React from 'react'
import PropTypes from 'prop-types'
import {
  Pdf,
  Docx,
  Xlsx,
  Pptx,
  Audio,
  Video,
  Photo,
  Unsupported,
} from './FileType'

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
    case 'pptx': {
      return <Pptx {...props} />
    }
    case 'mp3':
    case 'mpeg':
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
    case 'jpg':
    case 'jpeg':
    case 'gif':
    case 'png': {
      return <Photo {...props} />
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
