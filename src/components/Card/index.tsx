"use client"

import { Box, Flex,Text } from "@chakra-ui/react"
import Image, { StaticImageData } from "next/image"
import style from "./style.module.css"
import Genre from "../Genre"
import {RiStarSFill} from "react-icons/ri"
import Flags from "../Flags"
interface IPropsCard{
    src : string | StaticImageData
}



export function Card(props : IPropsCard){
    return (
        <Flex className={style.card} marginX={{default : "auto",tabletSmall : "0px"}} flexDirection={"column"} position={"relative"} width={"150px"} maxWidth={"150px"} height={"260px"}>
                <Image className={style.card__image} alt="Manga cards" src={props.src}></Image>
                <Flex gap={"0.25rem"} flexDirection={"column"} width={"100%"} paddingY={"0.25rem"} bg={"brand.brand4"} justifyContent={"center"} alignItems={"center"}>
                    <Text margin={0} color={"greyScale.whiteFixed"} fontWeight={"mangaCard.title"} fontSize={"mangaCard.title"}>One Piece</Text>
                    <Text margin={0} color={"greyScale.whiteFixed"} fontWeight={"mangaCard.author"} fontSize={"mangaCard.author"}>Oda</Text>
                </Flex>
                <Flex borderRadius={"5px"} borderTopEndRadius={"0px"} borderTopStartRadius={"0px"} direction={"column"} gap={"0.2rem"} paddingLeft={"1.125rem"} width={"100%"} paddingTop={"0.375rem"} bg={"greyScale.whiteFixed"} justifyContent={"flex-start"} alignItems={"center"}>
                    <Flex gap={"0.2rem"} width={"100%"}>
                        <Text margin={0} color={"brand.brand4"} fontWeight={"mangaCard.chapter"} fontSize={"mangaCard.chapter"}>4</Text>
                        <Text margin={0} color={"greyScale.greyScale.grey0"} fontWeight={"mangaCard.chapter"} fontSize={"mangaCard.chapter"}>chapters</Text>
                    </Flex>
                    <Flex flexFlow={"row wrap"} gap={"0.2rem"} alignItems={"center"} width={"100%"}>
                        <Genre text="Dark Fantasy"></Genre>
                    <Genre text="Action"></Genre>
                    <Text margin={0} color={"greyScale.grey1"} fontWeight={"mangaCard.genres"} fontSize={"mangaCard.chapter"}>Continuos or finished</Text>
                    </Flex>
                    <Flex marginBottom={"0.2rem"} alignItems={"center"} width={"100%"} justifyContent={"flex-start"}>
                        <RiStarSFill className={style.star_icon}></RiStarSFill>
                        <Text margin={0} color={"greyScale.grey0"} fontWeight={"mangaCard.score"} fontSize={"mangaCard.score"}>8.91</Text>
                    </Flex>
                </Flex>
                <Flags FlagType="card" FlagName="south korea"></Flags>
        </Flex>
    )
}