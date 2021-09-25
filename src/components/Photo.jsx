import React, { useState, useEffect } from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Loading from '../Loading'

const Photo = ({ src, style }) => {
  const [hasImg, setHasImg] = useState(false)
  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => {
      setHasImg(true)
    }
  }, [src])

  return hasImg ? (
    <Zoom>
      <img src={src} style={style} alt="" />
    </Zoom>
  ) : (
    <Loading />
  )
}

export default Photo
