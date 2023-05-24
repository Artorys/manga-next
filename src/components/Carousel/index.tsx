"use client"

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import one_piece from "./mocks/one_piece.jpeg"
import Image from "next/image";
import style from "./style.module.css"
import {GiPartyPopper} from "react-icons/gi"

export default function Carousel(){
    return (
        <Flex  width={"100%"} maxWidth={"100%"} height={"100%"} justifyContent={"flex-end"}>
            <Box marginX={"2rem"} width={"auto"} height={"auto"}>
                <Flex alignItems={"center"}>
                    <Text color={"brand.brand1"} marginY={"0.75rem"} fontFamily={"lato"} fontWeight={"bold"}>Out Now</Text>
                    <GiPartyPopper fill="#E40066"></GiPartyPopper>
                </Flex>
                <Box className={style.carousel} paddingLeft={"6.563rem"}>
                    <Image className={style.carousel__image} alt="Manga images" src={one_piece}></Image>
                    <Flex gap={'0.75rem'} width={"50%"} flexDirection={"column"} position={"relative"} zIndex={1}>
                        <Heading fontFamily={"lato"} fontWeight={"extrabold"} letterSpacing={"0.70rem"} color={"greyScale.whiteFixed"}>One Piece</Heading>
                        <Text fontFamily={"lato"} fontWeight={"extrabold"} letterSpacing={"0.70rem"} color={"greyScale.whiteFixed"}>fdskfndkfndsknsdknsdkfnsdknfdsknfdsknfdsknfsdknfdskndskn</Text>
                    </Flex>
                </Box>  
            </Box>
        </Flex>
    )
}