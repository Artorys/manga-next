"use client"

import { Box, Divider, IconButton, Input, InputGroup, InputLeftElement, InputRightElement, useMediaQuery } from "@chakra-ui/react";
import {FcSearch} from "react-icons/fc"
import style from "./style.module.css"
import {AiFillFilter} from "react-icons/ai"
import { LabelStyled } from "./style";
import { useState } from "react";
export function SearchBar(){
    const [isLargerThan800] = useMediaQuery('(min-width: 800px)')
    const [isClosed,setIsClosed] = useState(false)
    
    return(
        isLargerThan800 ? 
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
        </Box> : 
        <LabelStyled isClosed={isClosed} htmlFor="search">
            <input onClick={()=> setIsClosed(true)} onBlur={()=> setIsClosed(false)} id="search" type="text" placeholder="Search" />
            <FcSearch className="i"></FcSearch>
        </LabelStyled>
    )
}