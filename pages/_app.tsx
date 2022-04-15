import '../styles/globals.css'
import type { AppProps } from 'next/app'
import PolarisProvider from '../components/ploaris'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PolarisProvider>
      <Component {...pageProps} />
    </PolarisProvider>
  )
}

export default MyApp
