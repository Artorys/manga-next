"use client"

import { Box, Divider, Flex, Input, InputGroup, Center, InputLeftElement, InputRightElement, useMediaQuery } from "@chakra-ui/react";
import {FcSearch} from "react-icons/fc"
import {AiFillFilter, AiOutlineAlignLeft, AiOutlineAppstore} from "react-icons/ai"
import { LabelStyled } from "./style";
import { Dispatch, SetStateAction, useState } from "react";
import { FilterModal } from "../FilterModal";

interface ISearchBarProps{
    placeholder?: string
    chapters?: boolean
    type?: string
    forCards?: boolean
    setIsCardBoxed? : Dispatch<SetStateAction<boolean>>
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
                     <Input type={props.type ?? "text"} variant={"filter"} placeholder={props.placeholder ?? "Search here"}></Input>
                    {!props.chapters ? 
                    <InputRightElement width={"auto"}>
                            <Divider height={"98%"} borderTopColor={"transparent"} borderBottomColor={"transparent"} borderColor={"greyScale.grey0"} borderStyle={"dashed"} orientation="vertical"></Divider>
                            <FilterModal margin="0rem 0.6rem 0rem 0.4rem"></FilterModal>
                    </InputRightElement>
                    : <></>}
                 </InputGroup>   
             </Box> : 
             <LabelStyled style={{marginTop : props.forCards && !isClosed ? "1rem" : "0"}} isClosed={isClosed} htmlFor="search">
                <InputGroup>
                    <input onClick={()=> setIsClosed(false)} onBlur={()=> setIsClosed(true)} id="search" type={props.type ?? "text"} placeholder="Search" />
                    {!isClosed && !props.chapters ? 
                    <InputRightElement>
                        <Center height={"30px"}>
                            <Divider height={"100%"} borderTopColor={"transparent"} borderBottomColor={"transparent"} borderColor={"greyScale.grey0"} borderStyle={"dashed"} orientation="vertical"></Divider>
                        </Center>   
                        <FilterModal margin="0rem 0rem 0.4rem 0.6rem"></FilterModal>
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