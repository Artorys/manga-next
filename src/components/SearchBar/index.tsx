"use client"

import { Box, Divider, Flex, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import {FcSearch} from "react-icons/fc"
import style from "./style.module.css"
import {AiFillFilter} from "react-icons/ai"
export function SearchBar(){
    return(
        <Box borderRadius={"25px"} border={"solid 1px black"}>
            <InputGroup>
                <InputLeftElement>
                    <FcSearch></FcSearch>
                </InputLeftElement>
                <Input variant={"filter"} placeholder="Search here"></Input>
                <InputRightElement width={"auto"}>
                    <Divider borderTopColor={"transparent"} borderBottomColor={"transparent"} borderColor={"greyScale.grey0"} borderStyle={"dashed"} orientation="vertical"></Divider>
                    <Box _hover={{cursor : "pointer"}} marginX={"0.8rem"}>
                        <AiFillFilter className={style.icon} fill="#1B6FA8"></AiFillFilter>
                    </Box>
                </InputRightElement>
            </InputGroup>
        </Box>
    )
}