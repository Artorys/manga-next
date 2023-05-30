import { Flex, Heading,Box,Text } from "@chakra-ui/react";
import Image from "next/image"
import Button from "../Button"
import style from "./style.module.css"
import { Flag } from "semantic-ui-react";
import one_piece from "./mocks/one_piece.jpeg"
import Flags from "../Flags";

export default function Banner(){
    return(
            <Box className={style.carousel} paddingLeft={"6.563rem"}>
                <Flex width={"100%"} height={"100%"}>
                    <Image className={style.carousel__image} alt="Manga images" src={one_piece}></Image>
                    <Flex gap={'0.75rem'} paddingTop={"1.875rem"} width={"50%"} flexDirection={"column"} position={"relative"} zIndex={1}>
                        <Heading fontFamily={"lato"} fontWeight={"extrabold"} letterSpacing={"0.70rem"} color={"greyScale.whiteFixed"}>One Piece</Heading>
                        <Text fontSize={"mangaCarousel.description"} fontFamily={"lato"} fontWeight={"semibold"} letterSpacing={"0.70rem"} color={"greyScale.whiteFixed"}>fdskfndkfndsknsdknsdkfnsdknfdsknfdsknfdsknfsdknfdskndskn</Text>
                        <Button letterSpacing="0.5rem" size="carouselButton" text="READ" variant="carouselButton"></Button>
                    </Flex>
                    <Flags FlagType="banner" FlagName="jp"></Flags>
                    <Flex position="absolute" bottom={0} left={0}>
                        <Button size="carouselButtonChapter" text="Chapter 1083" variant="carouselButtonChapter"></Button>
                    </Flex>
                </Flex>
            </Box>  
    )
}