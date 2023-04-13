import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from "@/common/components/Header/Header";
import Cursor from "@/common/components/Cursor/Cursor";

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Cursor/>
    <Header/>
    <Component {...pageProps} />
  </>
}
