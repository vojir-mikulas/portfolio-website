import React, {useEffect, useState} from 'react';
import {initializeApp} from "firebase/app";
import {collection, getFirestore} from "@firebase/firestore";
import {useCollection, useCollectionData} from "react-firebase-hooks/firestore";
import {getStorage, ref} from "@firebase/storage";
import {useDownloadURL} from "react-firebase-hooks/storage";
import Image from 'next/image'


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