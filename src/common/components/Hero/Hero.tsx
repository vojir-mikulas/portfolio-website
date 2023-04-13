import React from 'react';
import { Inter, Oswald } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
const oswald = Oswald({subsets:['latin']})
const Hero = () => {
    return (
     <div className={"grid h-[70vh] w-full place-content-center"}>
         <div  >
             <span className={`${inter.className} ml-2 font-medium `}> Hey 👋, my name is Mikuláš Vojíř and I am a</span>
             <div className={`${oswald.className} flex flex-col font-medium my-2 relative ` }>
                 <span className={" text-9xl mobile:text-7xl"}>Fullstack</span> <br/>
                 <span className={"text-stroke   text-transparent text-9xl mobile:text-7xl"}>Web Developer</span>
             </div>
             <span className={"text-sm ml-4 mt-2"}>Based in Prague, Czech Republic</span>
         </div>
     </div>
    );
};

export default Hero;