import React, { useState } from 'react'
import Loading from '../Loading'
import { FileViewerProps } from '@/types'

const Video: React.FC<FileViewerProps> = ({ src, style, className }) => {
  const [loading, setLoading] = useState(true)
  const visibility = loading ? 'hidden' : 'visible'
  const onCanPlay = () => setLoading(false)

  return (
    <div>
      {loading && <Loading />}
      <video
        style={{ ...style, visibility }}
        className={className}
        controls
        onCanPlay={onCanPlay}
        src={src}
      >
        Video playback is not supported by your browser.
      </video>
    </div>
  )
}
export default Video
