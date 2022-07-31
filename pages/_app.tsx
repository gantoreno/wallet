import "../styles/globals.css"

import type { AppProps } from "next/app"
import AuthProvider from "../context/AuthProvider"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </div>
  )
}

export default MyApp
