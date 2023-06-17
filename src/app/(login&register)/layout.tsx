import Logo from "@/components/Logo"
import { ReactNode } from "react"
import style from "./style.module.css"
import Catchphrase from "@/components/Catchphrase"
import backgroundImg from "./mocks/background_login&register.png"
import Image from "next/image"

interface IPropsLoginPage{
    children : ReactNode
}
export default function LayoutLoginAndRegister(props : IPropsLoginPage){
    return (
        <div className={style.box_page}>
            <div className={style.box_content}>
                <header className={style.header}>
                    <Logo></Logo>
                </header>
                <main>
                    <section className={style.section_text}>
                        <Catchphrase></Catchphrase>
                    </section>
                    <section className={style.section_form}>
                        <form className={style.form}>
                            {props.children}
                        </form>
                    </section>
                </main>
            </div>
            <div className={style.box_image}>
                <Image fill={true} src={backgroundImg} alt="background for login and register page, anime photo"></Image>
            </div>
        </div>
    )
}