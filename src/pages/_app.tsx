import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from "@/common/components/Header/Header";
import Cursor from "@/common/components/Cursor/Cursor";
import Footer from "@/common/components/Footer/Footer";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
export default function App({ Component, pageProps }: AppProps) {
  return <>

    <Cursor/>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
  </>
}
