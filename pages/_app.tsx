import { AppProps } from 'next/app'
import Header from '../config'

import '../styles/global.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default App
