import React, { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from '@/pages/_app';
import { getDownloadURL, getStorage, ref } from '@firebase/storage';

type DownloadURL = {
    filePath: string;
    url: string | null;
};

const UseFirebaseImages = (
    filePaths: string[],
    mainFolder: string
): DownloadURL[] => {
    const [downloadURLs, setDownloadURLs] = useState<DownloadURL[]>([]);
    const app = useContext(FirebaseContext);

    useEffect(() => {
        const fetchDownloadURL = async (path: string): Promise<DownloadURL> => {
            try {
                const storageRef = ref(getStorage(app), `${mainFolder}/${path}`);
                const url = await getDownloadURL(storageRef);
                return { filePath: path, url };
            } catch (error) {
                console.error('Error fetching download URL: ', error);
                return { filePath: path, url: null };
            }
        };

        if (filePaths && filePaths.length > 0) {
            Promise.all(filePaths.map(fetchDownloadURL)).then(setDownloadURLs);
        } else {
            setDownloadURLs([]);
        }
    }, [app, JSON.stringify(filePaths)]);

    return downloadURLs;
};

export default UseFirebaseImages;
