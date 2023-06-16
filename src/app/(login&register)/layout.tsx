import Logo from "@/components/Logo"
import { ReactNode } from "react"
import style from "./style.module.css"
import Catchphrase from "@/components/Catchphrase"

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
                    <section>
                        <Catchphrase></Catchphrase>
                    </section>
                    <section>
                        <form>
                            {props.children}
                        </form>
                    </section>
                </main>
            </div>
            <div className={style.box_image}>

            </div>
        </div>
    )
}