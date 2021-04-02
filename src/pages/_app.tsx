/*
 * Import
 */
import React from 'react'
import { AppProps } from 'next/app'
import { Header } from 'components/organisms/header'
import 'styles/globals.scss'

/*
 * Root
 */
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
