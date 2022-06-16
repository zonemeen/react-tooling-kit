import React, { useState } from 'react'
import Loading from '../Loading'
import { FileViewerProps } from '@/types'

const Audio: React.FC<FileViewerProps> = ({ src, style, className }) => {
  const [loading, setLoading] = useState(true)
  const visibility = loading ? 'hidden' : 'visible'
  const onCanPlay = () => setLoading(false)

  return (
    <div>
      {loading && <Loading />}
      <audio
        className={className}
        style={{ visibility, ...style }}
        controls
        onCanPlay={onCanPlay}
        src={src}
      >
        Video playback is not supported by your browser.
      </audio>
    </div>
  )
}
export default Audio
