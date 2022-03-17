import { useEffect } from 'react'

export const useScrollLock = (shouldLock) => {
  useEffect(() => {
    if (shouldLock) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [shouldLock])
}
