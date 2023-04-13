import React from 'react';
import Logo from "@/common/components/Logo/Logo";
import Link from "next/link";

const Header = () => {
    return (
        <header className={"fixed w-full"}>
            <div className={"md:container mx-auto flex items-center justify-between"}>
                <Logo size={"30px"}/>

                <div className={"inline-flex gap-6"}>
                    <nav className={"inline-flex gap-2"}>
                        <Link href={"/"}>Home</Link>
                        <Link href={"/projects"}>Projects</Link>
                        <Link href={"/about"}>About me</Link>
                    </nav>
                    <span>|</span>
                    <div className={"inline-flex gap-2"}>
                        <button>CZ</button>
                        <button>DARK</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;