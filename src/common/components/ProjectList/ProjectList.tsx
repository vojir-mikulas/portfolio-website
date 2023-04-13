import React, {useContext} from 'react';
import {FirebaseContext} from "@/pages/_app";
import {useCollection, useCollectionDataOnce, useCollectionOnce} from "react-firebase-hooks/firestore";
import {collection, getFirestore} from "@firebase/firestore";
import Link from "next/link";

const ProjectList = () => {
    const app = useContext(FirebaseContext)
    const [projects, loading, error] = useCollectionOnce(
        collection(getFirestore(app), 'projects'));

     return (
        <div>
          <h1 className={"text-6xl font-bold mb-4"}>My projects</h1>
            <ul>
                {projects?.docs.map((doc)=>{
                    return(
                        <li key={doc.data().name}>
                            <Link href={`/project/${doc.id}`}>{doc.data().name}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default ProjectList;