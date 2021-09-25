import React, { useState } from 'react'
import Loading from '../Loading'

const Video = ({ fileType, src, style }) => {
  const [loading, setLoading] = useState(true)
  const visibility = loading ? 'hidden' : 'visible'
  const onCanPlay = () => setLoading(false)

  return (
    <div>
      {loading && <Loading />}
      <video
        style={{ ...style, visibility }}
        controls
        type={`video/${fileType}`}
        onCanPlay={onCanPlay}
        src={src}
      >
        Video playback is not supported by your browser.
      </video>
    </div>
  )
}
export default Video
