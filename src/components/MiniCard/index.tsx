"use client"

import { Box, Flex,Text } from "@chakra-ui/react"
import Image, { StaticImageData } from "next/image"
import style from "./style.module.css"
import {RiStarSFill} from "react-icons/ri"
import Button from "../Button"
import { Flag } from "semantic-ui-react"
import {IoMdTimer} from "react-icons/io"
interface IPropsCard{
    src : string | StaticImageData
}



export function MiniCard(props : IPropsCard){
    return (
        <Flex className={style.card} marginX={{default : "auto",tabletSmall : "0px"}} flexDirection={"row"} position={"relative"} width={"100%"} height={"auto"}>
                <Image className={style.card__image} alt="Manga cards" src={props.src}></Image>
                    <Flex bg={"brand.brand4"} borderRadius={"5px"} borderTopEndRadius={"0px"} borderTopStartRadius={"0px"} direction={"column"} paddingLeft={"1.125rem"} width={"100%"} paddingTop={"0.375rem"} justifyContent={"space-between"} alignItems={"f"}>
                        <Box mt={"0.5rem"}>
                            <Text margin={0} color={"greyScale.whiteFixed"} fontWeight={"mangaCard.title"} fontSize={"mangaCard.title"}>One Piece</Text>
                            <Text margin={0} color={"greyScale.whiteFixed"} fontWeight={"mangaCard.author"} fontSize={"mangaCard.author"}>Oda</Text>
                        </Box>
                        <Flex flexDirection={"column"} gap={"0.5rem"} mb={"0.5rem"}>
                            <Flex gap={"0.2rem"} width={"100%"}>
                                <Button variant="miniCardButtonFlag" size="miniCardButtonFlag">
                                    <>
                                        <Flag name="south korea"></Flag>
                                        Manga
                                    </>
                                </Button>
                            <Button linkText="1012" text="Chapter" size="cardButtonChapter" variant="cardButtonChapter"></Button>
                            </Flex>
                            <Flex flexFlow={"row wrap"} gap={"0.2rem"} alignItems={"center"} width={"100%"}>
                                <Flex alignItems={"center"}>
                                    <IoMdTimer color="white"></IoMdTimer>
                                    <Text fontSize={"0.4375rem"} fontWeight={"medium"}  color={"greyScale.whiteFixed"}>2 hours ago</Text>
                                </Flex>
                            </Flex>
                            <Flex marginBottom={"0.2rem"} alignItems={"center"} width={"100%"} justifyContent={"flex-start"}>
                                <RiStarSFill className={style.star_icon}></RiStarSFill>
                                <Text margin={0} color={"greyScale.whiteFixed"} fontWeight={"mangaCard.score"} fontSize={"mangaCard.score"}>8.91</Text>
                            </Flex>
                        </Flex>
                    </Flex>
        </Flex>
    )
}