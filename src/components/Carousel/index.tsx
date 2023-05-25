"use client"

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import one_piece from "./mocks/one_piece.jpeg"
import Image from "next/image";
import style from "./style.module.css"
import {GiPartyPopper} from "react-icons/gi"
import Button from "../Button";
import { Flag } from 'semantic-ui-react';

export default function Carousel(){
    return (
        <Flex  width={"100%"} maxWidth={"100%"} height={"100%"} justifyContent={"flex-end"}>
            <Box marginX={"2rem"} width={"auto"} height={"auto"}>
                <Flex marginY={"1rem"} alignItems={"center"}>
                    <Flex gap={"0.25rem"}>
                        <Text fontWeight={"titleSections"} fontSize={"titleSections"} margin={0} color={"greyScale.grey0"}>Out</Text>
                        <Text color={"brand.brand1"} fontWeight={"titleSections"} fontSize={"titleSections"}>Now</Text>       
                    </Flex>
                    <GiPartyPopper fill="#E40066"></GiPartyPopper>
                </Flex>
                <Box className={style.carousel} paddingLeft={"6.563rem"}>
                    <Image className={style.carousel__image} alt="Manga images" src={one_piece}></Image>
                    <Flex gap={'0.75rem'} paddingTop={"1.875rem"} width={"50%"} flexDirection={"column"} position={"relative"} zIndex={1}>
                        <Heading fontFamily={"lato"} fontWeight={"extrabold"} letterSpacing={"0.70rem"} color={"greyScale.whiteFixed"}>One Piece</Heading>
                        <Text fontSize={"mangaCarousel.description"} fontFamily={"lato"} fontWeight={"semibold"} letterSpacing={"0.70rem"} color={"greyScale.whiteFixed"}>fdskfndkfndsknsdknsdkfnsdknfdsknfdsknfdsknfsdknfdskndskn</Text>
                        <Button letterSpacing="0.5rem" size="carouselButton" text="READ" variant="carouselButton"></Button>
                    </Flex>
                    <Flex margin={"1rem"} top={0} right={0} position={"absolute"}>
                        <Button size='carouselButtonFlag' text='Manga' variant='carouselButtonFlag' leftIcon={<Flag name='jp'></Flag>}></Button>
                    </Flex>
                    <Flex position="absolute" bottom={0} left={0}>
                        <Button size="carouselButtonChapter" text="Chapter 1083" variant="carouselButtonChapter"></Button>
                    </Flex>
                </Box>  
            </Box>
        </Flex>
    )
}