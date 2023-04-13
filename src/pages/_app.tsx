import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from "@/common/components/Header/Header";

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Header></Header>
    <Component {...pageProps} />
  </>
}
