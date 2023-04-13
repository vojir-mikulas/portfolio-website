import React from 'react';
import Logo from "@/common/components/Logo/Logo";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={"w-full  mx-auto py-16 flex flex-col"}>
           <div className={"md:container mx-auto"}>
               <div className={"w-full h-full border-t  border-black flex gap-60 py-10"}>
                   <div>
                       <h3 className={"font-bold text-2xl"}>Contact</h3>

                       <ul className={"mt-3"}>
                           <li className={"mt-1 interactable"}><a href="mailto:vojir.mikulas@gmail.com">vojir.mikulas@gmail.com</a></li>
                       </ul>
                   </div>
                   <div>
                       <h3 className={"font-bold text-2xl"}>Socials</h3>

                       <ul className={"mt-3"}>
                           <li className={"mt-1 interactable"}><a href="https://github.com/vojir-mikulas">Github</a></li>
                           <li className={"mt-1 interactable"}><a href="https://www.linkedin.com/in/mikul%C3%A1%C5%A1-voj%C3%AD%C5%99-62aa03200/">LinkedIn</a></li>
                           <li className={"mt-1 cursor-not-allowed"}><a >StartupJobs</a></li>
                           <li className={"mt-1 cursor-not-allowed"}><a >Stackoverflow</a></li>
                       </ul>
                   </div>
                   <div className={"h-34 flex flex-col justify-between"}>
                       <Logo size={"40px"}/>
                       <div>
                           <span>Copyright © 2022 Vojíř</span>
                           <span>Design © Vojíř</span>
                       </div>
                   </div>
               </div>
               <nav className={"mt-10"}>
                   <ul className={"flex align-center justify-center font-bold gap-10"}>
                       <li className={"interactable"}>
                           <Link href={"/"}> Home</Link>
                       </li>
                       <li className={"interactable"}>
                           <Link href={"/about"}> About me</Link>
                       </li>
                       <li className={"interactable"}>
                           <Link href={"/termsofpolicy"}> Terms of policy</Link>
                       </li>
                   </ul>
               </nav>
           </div>
        </footer>
    );
};

export default Footer;