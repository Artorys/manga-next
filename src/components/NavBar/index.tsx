"use client"
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Button from "../Button";
import { SearchBar } from "../SearchBar";

export default function Navbar(){
    return (
        <Flex border={"solid 1px"} boxShadow={"1px 0.1px 5px 0px #1F1F1F"} borderColor={"#1F1F1F"} padding={"1.063rem"} justifyContent={"space-between"} alignItems={"center"}>
            <Box>
                <Flex alignItems={"center"} gap={"0.2rem"}>
                    <Heading color={"brand.brand4"} fontSize={"logo"} fontWeight={"logo"} as={"h1"}>
                        Yuki
                        <Text border={"solid 3px"} as={"span"}>
                            雪
                        </Text>
                    </Heading>
                </Flex>
            </Box>
            <Flex as= {"nav"} gap={"1.25rem"}>
                <Box>
                    <SearchBar></SearchBar>
                </Box>
                <Flex as={"ul"} gap={"1.25rem"}>
                    <li>
                        <Button variant="login" text="Log in"></Button>
                    </li>
                    <li>
                        <Button variant="register" text="Sign Up"></Button>
                    </li>
                </Flex>
            </Flex>
        </Flex>
    )
}