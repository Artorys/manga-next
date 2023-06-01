import Navbar from "@/components/NavBar";
import style from "./style.module.css"
import { SideBar } from "@/components/SideBar";

export default function HomeLayout({children} : {children : React.ReactNode}){
    return(
        <>
        <header>
            <Navbar></Navbar>
        </header>
        <div className={style.container}>
            <aside className={style.aside}>
                <SideBar></SideBar>
            </aside>
            <main className={style.main}>
                {children}
            </main>
        </div>
        </>
    )
}