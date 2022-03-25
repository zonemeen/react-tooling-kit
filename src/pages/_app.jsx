import { useEffect, useState } from 'react'
import '@/styles/main.scss'
import '@/styles/nv.d3.scss'
import '@/styles/pptxjs.scss'
import '@/styles/unsupported.scss'

import { SWUpdatePopup } from '@/components/SWUpdatePopup'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  const [enableAnalytics, setEnableAnalytics] = useState(false)

  useEffect(() => {
    if (
      process.env.NODE_ENV === 'production' &&
      location.hostname === 'react-file-preview.vercel.app'
    ) {
      setEnableAnalytics(true)
    }
  }, [])

  return (
    <>
      <Component {...pageProps} />
      <SWUpdatePopup />
      {enableAnalytics && (
        <Script
          strategy="afterInteractive"
          data-website-id="4ff6897f-d635-4c16-8c67-91c40fae7281"
          src="https://umami.egoist.sh/mami.js"
        />
      )}
    </>
  )
}

export default MyApp
