"use client"
import { Box, Flex } from "@chakra-ui/react";
import Button from "../Button";
import { SearchBar } from "../SearchBar";
import { useMediaQuery } from '@chakra-ui/react'
import { SideBar } from "../SideBar";
import React from "react";
import Logo from "../Logo";

export default function Navbar(){

    const [isLargerThan480] = useMediaQuery('(min-width: 480px)')
    
    return (
        <Flex border={"solid 1px"} boxShadow={"1px 0.1px 5px 0px #1F1F1F"} borderColor={"#1F1F1F"} padding={"1.063rem"} justifyContent={"space-between"} alignItems={"center"}>
            <Box>
               <Logo></Logo>
            </Box>
            <Flex as= {"nav"} gap={"1.25rem"}>
                <Flex as={"ul"} gap={"1.25rem"}>
                    <SearchBar></SearchBar>
                    {
                        isLargerThan480 ? 
                        <>
                            <li>
                                <Button variant="login" text="Log in"></Button>
                            </li>
                            <li>    
                                <Button variant="register" text="Sign Up"></Button>
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