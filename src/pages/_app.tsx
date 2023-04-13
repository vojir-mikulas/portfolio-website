import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from "@/common/components/Header/Header";
import Cursor from "@/common/components/Cursor/Cursor";
import Footer from "@/common/components/Footer/Footer";
import { Inter } from 'next/font/google'
import {createContext} from "react";
import {FirebaseApp, initializeApp} from "firebase/app";

export const ThemeContext = createContext("light");
export const FirebaseContext = createContext<undefined | FirebaseApp>(undefined);

const firebaseConfig = {
  apiKey: "AIzaSyBOZHuCNd891yxeSYya43aVAv6XNxk-nls",
  authDomain: "vojir-io.firebaseapp.com",
  databaseURL: "https://vojir-io-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "vojir-io",
  storageBucket: "vojir-io.appspot.com",
  messagingSenderId: "248627611303",
  appId: "1:248627611303:web:76f506892834f0f179bd82",
  measurementId: "G-9WGRYWHV76"
};

// Initialize Firebase
const app  = (initializeApp(firebaseConfig));

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <ThemeContext.Provider value="light">
      <FirebaseContext.Provider value={app}>
        <Cursor/>
        <Header/>
        <Component {...pageProps} />
        <Footer/>
      </FirebaseContext.Provider>
    </ThemeContext.Provider>
  </>
}
