import '../styles/globals.scss'
import 'tailwindcss/base.css'
import 'tailwindcss/components.css'
import 'tailwindcss/utilities.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import type { AppProps } from 'next/app'
import { SiteProvider } from '@context/siteContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SiteProvider>
      <Component {...pageProps} />
    </SiteProvider>
  )
}

export default MyApp
