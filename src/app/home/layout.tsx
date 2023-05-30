import Navbar from "@/components/NavBar";
import style from "./style.module.css"

export default function HomeLayout({children} : {children : React.ReactNode}){
    return(
        <>
        <header>
            <Navbar></Navbar>
        </header>
        <div className={style.container}>
            <aside className={style.aside}>
            </aside>
            <main className={style.main}>
                {children}
            </main>
        </div>
        </>
    )
}