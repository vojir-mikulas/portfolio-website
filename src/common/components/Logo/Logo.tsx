import React from 'react';
import { useRouter} from "next/router";

interface LogoInterface {
    size : string
}
const Logo : React.FC<LogoInterface> = ({size}) => {
    const router = useRouter()
    const HandleClick = () => router.push("/");
    return (
        <a onClick={HandleClick} className={"cursor-pointer interactable"}>
            <h1 className="font-bold " style={{fontSize: size}}>
                V
            </h1>
        </a>
    );
};

export default Logo;