type Style = {
  [key: string]: string | number | boolean
}

export interface FileViewerProps {
  className?: string
  style?: Style
  isHtml?: boolean
  fileType?: string
  src: string
}
