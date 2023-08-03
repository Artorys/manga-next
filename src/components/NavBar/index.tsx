"use client"
import { Box, Flex,Button as Butico } from "@chakra-ui/react";
import Button from "../Button";
import { SearchBar } from "../SearchBar";
import { useMediaQuery } from '@chakra-ui/react'
import { SideBar } from "../SideBar";
import React from "react";
import Logo from "../Logo";
import { useRouter } from "next/navigation";

export default function Navbar(){

    const router = useRouter()

    const [isLargerThan480] = useMediaQuery('(min-width: 480px)')
    
    return (
        <Flex border={"solid 1px"} boxShadow={"1px 0.1px 5px 0px #1F1F1F"} borderColor={"#1F1F1F"} padding={"1.063rem"} justifyContent={"space-between"} alignItems={"center"}>
            <Box>
               <Logo></Logo>
            </Box>
            <Flex as= {"nav"} gap={"1.25rem"}>
                <Flex alignItems={"center"} as={"ul"} gap={"1.25rem"}>
                    <SearchBar margin={false}></SearchBar>
                    {
                        isLargerThan480 ? 
                        <>
                            <li>
                                <Button Onclick={()=> router.push("/login")} variant="login" text="Log in"></Button>
                            </li>
                            <li>    
                                <Button Onclick={()=> router.push("/register")} variant="register" text="Sign Up"></Button>
                            </li>
                        </>
                        : 
                        <li>
                            <SideBar ></SideBar>
                        </li>
                    }
                </Flex>
            </Flex>
        </Flex>
    )
}