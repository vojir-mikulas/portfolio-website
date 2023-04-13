import React, {useContext} from 'react';
import {useRouter} from "next/router";
import Hero from "@/common/components/Hero/Hero";
import ProjectList from "@/common/components/ProjectList/ProjectList";
import {useDocument} from "react-firebase-hooks/firestore";
import {doc, getFirestore} from "@firebase/firestore";
import {FirebaseContext} from "@/pages/_app";
import useFirebaseImages from "@/common/hooks/useFirebaseImages";

const Project = () => {
    const router = useRouter()
    const app = useContext(FirebaseContext);
    const { id } = router.query

    const [project, projectLoading, projectError] = useDocument(
        doc(getFirestore(app), 'projects', `${id}`),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        })
     const screenshots = useFirebaseImages(project?.data()?.screenshots,"projects")
        if(projectLoading) return <div></div>
       return (
        <main className="flex min-h-screen flex-col md:container mx-auto py-20">
            <ul>
                <li>Description: {project.data()?.description}</li>
                <li>Thumbnail: {project.data()?.thumbnail}</li>
                <li>
                    Stack:
                    <ul>
                        {project.data()?.stack?.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </li>
                <li>Name: {project.data()?.name}</li>
                <li>Category: {project.data()?.category}</li>
                <li>
                    Links:
                    <ul>
                        {project.data()?.links?.map((link, index) => (
                            <li key={index}>{link}</li>
                        ))}
                    </ul>
                </li>

                <li>Year: {project.data()?.year}</li>
            </ul>


            <div className={"flex flex-col gap-10"}>
                {screenshots ? screenshots.map((screenshot,index)=> (
                    <img key={screenshot.filePath} src={screenshot.url ? screenshot.url : ""} alt={index}/>
                )) :""}
            </div>

        </main>
    );
};

export default Project;