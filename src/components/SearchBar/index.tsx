"use client"

import { Box, Divider, Flex, Input, InputGroup, InputLeftElement, InputRightElement, useMediaQuery } from "@chakra-ui/react";
import {FcSearch} from "react-icons/fc"
import style from "./style.module.css"
import {AiFillFilter, AiOutlineAlignLeft, AiOutlineAppstore} from "react-icons/ai"
import { LabelStyled } from "./style";
import { Dispatch, SetStateAction, useState } from "react";

interface ISearchBarProps{
    forCards: boolean
    setIsCardBoxed : Dispatch<SetStateAction<boolean>>
}

export function SearchBar(props : ISearchBarProps){
    const [isLargerThan800] = useMediaQuery('(min-width: 800px)')
    const [isClosed,setIsClosed] = useState(true)
    
    return(
        <>
        {
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
             <LabelStyled style={{marginTop : props.forCards && !isClosed ? "1rem" : "0"}} isClosed={isClosed} htmlFor="search">
                <InputGroup>
                    <input onClick={()=> setIsClosed(false)} onBlur={()=> setIsClosed(true)} id="search" type="text" placeholder="Search" />
                    {!isClosed ? 
                    <InputRightElement>
                        <Divider borderTopColor={"transparent"} borderBottomColor={"transparent"} borderColor={"greyScale.grey0"} borderStyle={"dashed"} orientation="vertical"></Divider>
                        <Flex justifyContent={"center"} alignItems={"center"} width={"100%"} height={"100%"} _hover={{cursor : "pointer"}} >
                            <AiFillFilter className={`${style.iconCard} ${style.icon}`} fill="#1B6FA8"></AiFillFilter>
                        </Flex>
                    </InputRightElement>
                    : <></>
                    }       
                </InputGroup>
                {
                    isClosed ?
                    <FcSearch className="i"></FcSearch> 
                    : <></>
                }
             </LabelStyled>
        }
            {props.forCards ? 
            <Flex transition={"all 1s ease"} gap={"0.5rem"} mt={props.forCards && !isClosed ? "1rem" : "0"}>
                <Box onClick={()=> props.setIsCardBoxed(true)}  _hover={{cursor : "pointer", bg : "greyScale.grey10"}} borderRadius={"5px"} bg={"greyScale.whiteFixed"} padding={"0.2rem"}>
                    <AiOutlineAppstore size={"1.8rem"} color="#1B6FA8"></AiOutlineAppstore>
                </Box>      
                <Box onClick={()=> props.setIsCardBoxed(false)} _hover={{cursor : "pointer", bg : "greyScale.grey10"}} borderRadius={"5px"}  bg={"greyScale.whiteFixed"} padding={"0.2rem"}>
                    <AiOutlineAlignLeft size={"1.8rem"} color="#1B6FA8"></AiOutlineAlignLeft>
                </Box>
            </Flex> 
            : 
            <></>
            }
        </>
    )
}