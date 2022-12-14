import '../styles/globals.css'
import '../styles/modelPage.css'

import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  
  return(
    <>
      <Navbar></Navbar>
      <Component {...pageProps} />
    </>
    
  ) 
  
}

export default MyApp
