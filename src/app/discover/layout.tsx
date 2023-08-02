"use client"

import Navbar from "@/components/NavBar";
import style from "./style.module.css"
import { Aside } from "@/components/Aside";
import React from "react";

export default function DiscoverLayout({children} : {children : React.ReactNode}){

    return(
        <>
        <header>
            <Navbar ></Navbar>
        </header>
        <div className={style.container}>
            <Aside></Aside>
            <main className={style.main}>
                {children}
            </main>
        </div>
        </>
    )
}