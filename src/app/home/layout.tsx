import "./style.css"

export default function HomeLayout({children} : {children : React.ReactNode}){
    return(
        <section className="font-700 text-2xl">{children}</section>
    )
}