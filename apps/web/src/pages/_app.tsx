import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../global.css'
import '../twoslash-styles.css'

function MyApp({ Component, pageProps }: AppProps) {
   return (
    <>
      <Head>
        <link rel='icon' type='image/png' href='/favicon.png' />
      </Head>

      <Component {...pageProps} />
    </>
   )
}

export default MyApp
