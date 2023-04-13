import React, {useEffect, useState} from 'react';
import {initializeApp} from "firebase/app";
import {collection, getFirestore} from "@firebase/firestore";
import {useCollection, useCollectionData} from "react-firebase-hooks/firestore";
import {getStorage, ref} from "@firebase/storage";
import {useDownloadURL} from "react-firebase-hooks/storage";
import Image from 'next/image'

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

const Test = () => {

    const [value, loading, error] = useDownloadURL(
        ref(getStorage(app), 'projects/yellowflash/filters.png')
    );
    console.log(value);
    return (
        <div>
            <img src={value}/>

         </div>
    );
};

export default Test;