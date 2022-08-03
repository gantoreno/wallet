import "../styles/globals.css"

import Head from "next/head"
import type { AppProps } from "next/app"

import AuthProvider from "../context/AuthProvider"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <body className="bg-gray-100" />
      </Head>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  )
}

export default MyApp
