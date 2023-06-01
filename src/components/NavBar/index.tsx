"use client"
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Button from "../Button";
import { SearchBar } from "../SearchBar";
import { useMediaQuery } from '@chakra-ui/react'
import {AiOutlineMenu} from "react-icons/ai"
import { HamburgerIcon } from "../HamburguerIcon";
import { SideBar } from "../SideBar";

export default function Navbar(){

    const [isLargerThan480] = useMediaQuery('(min-width: 480px)')

    return (
        <Flex border={"solid 1px"} boxShadow={"1px 0.1px 5px 0px #1F1F1F"} borderColor={"#1F1F1F"} padding={"1.063rem"} justifyContent={"space-between"} alignItems={"center"}>
            <Box>
                <Flex alignItems={"center"} gap={"0.2rem"}>
                    <Heading margin={0} color={"brand.brand4"} fontSize={"logo"} fontWeight={"logo"} as={"h1"}>
                        Yuki
                    </Heading>
                    <Text color={"brand.brand4"} fontSize={"logo"} fontWeight={"logo"} border={"solid 3px"} as={"span"}>
                        雪
                    </Text>
                </Flex> 
            </Box>
            <Flex as= {"nav"} gap={"1.25rem"}>
                <Flex as={"ul"} gap={"1.25rem"}>
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
                            <SideBar></SideBar>
                        </li>
                    }
                </Flex>
            </Flex>
        </Flex>
    )
}