import React, { useState } from 'react'
import Loading from '../Loading'

const Audio = ({ src, style }) => {
  const [loading, setLoading] = useState(true)
  const visibility = loading ? 'hidden' : 'visible'
  const onCanPlay = () => setLoading(false)

  return (
    <div>
      {loading && <Loading />}
      <audio
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
