import Navbar from "@/components/NavBar";
import style from "./style.module.css";

export default function HomeLayout({children} : {children : React.ReactNode}){
    return(
        <>
            <Navbar></Navbar>
        </>
    )
}