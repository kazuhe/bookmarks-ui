import React from 'react'
import { AppProps } from 'next/app'
import { Header } from 'components/header'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
