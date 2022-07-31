import "../styles/globals.css"

import type { AppProps } from "next/app"
import AuthProvider from "../context/AuthProvider"
import Head from "next/head"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </div>
  )
}

export default MyApp
