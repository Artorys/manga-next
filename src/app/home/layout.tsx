import Navbar from "@/components/NavBar";

export default function HomeLayout({children} : {children : React.ReactNode}){
    return(
        <>
        <header>
            <Navbar></Navbar>
        </header>
        <main>
            {children}
        </main>
        </>
    )
}