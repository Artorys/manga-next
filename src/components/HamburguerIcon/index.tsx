import { AiOutlineMenu } from "react-icons/ai";
import style from "./style.module.css"
import { MouseEventHandler } from "react";

interface IHamburgerIconProps{
    onClick?: MouseEventHandler<SVGElement> | undefined
    ref? : React.MutableRefObject<null>
}

export function HamburgerIcon(props : IHamburgerIconProps){
    return(
        <AiOutlineMenu onClick={props.onClick} className={style.icon}></AiOutlineMenu>
    )
}       