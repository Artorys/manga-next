"use client"
import Logo from "@/components/Logo"
import { ReactNode } from "react"
import style from "./style.module.css"
import Catchphrase from "@/components/Catchphrase"
import backgroundImg from "./mocks/background_login&register.png"
import Image from "next/image"
import { useMediaQuery } from "@chakra-ui/react"
import Button from "@/components/Button"

interface IPropsLoginPage{
    children : ReactNode
}
export default function LayoutLoginAndRegister(props : IPropsLoginPage){

   const [isLargerThanTabletSmall] = useMediaQuery('(min-width: 480px)')

    return (
        <div className={style.container}>
            {!isLargerThanTabletSmall ? 
            <div className={style.box_phone}>
                <div className={style.box_phone__image}>
                    <Image fill={true} src={backgroundImg} alt="background for login and register page, anime photo"></Image>
                </div>
                <div className={style.box_phone__content}>
                    <header className={style.header}>
                        <Logo></Logo>
                    </header>
                    <main className={style.main}>
                        <section className={style.section_text}>
                            <Catchphrase colorP="greyScale.grey10" colorTitle="greyScale.whiteFixed"></Catchphrase>
                        </section>
                        <section className={style.section_form}>
                            <form className={style.form}>
                                {props.children}
                            </form>
                        </section>
                    </main>
                </div>
            </div>
            :
            <>
                <div className={style.box_content}>
                    <header className={style.header}>
                        <Logo></Logo>
                    </header>
                    <main className={style.main}>
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
            </>
            }
        </div>
    )
}