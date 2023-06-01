"use client"

import { Box, Flex,Text } from "@chakra-ui/react"
import { Card } from "../Card"
import style from "./style.module.css"
import berserk from "./mocks/berserk.jpg"
import vagabond from "./mocks/vagabond.jpg"
import begining from "./mocks/begining.jpg"
import solo_leveling from "./mocks/solo_leveling.jpg"
import vinland from "./mocks/vinland_saga.jpg"
import  CarouselResponsive  from "react-multi-carousel";

export function CarouselCards(){

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5 ,
          slidesToSlide: 5, // optional, default to 1.
        },
        tabletLarge : {
            breakpoint: { max: 1024, min: 800 },
            items: 4,
            slidesToSlide: 4, // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 800, min: 600 },
          items: 3,
          slidesToSlide: 3,
        },
        tabletSmall : {
            breakpoint: { max: 600, min: 400 },
            items: 3,
            slidesToSlide: 3,
        },
        mobile: {
          breakpoint: { max: 400, min: 0 },
          items: 2,
          slidesToSlide: 1,

        }
      };
      
    return (
        <Flex as={"section"} width={"97%"} height={"100%"}>
                <Flex paddingLeft={"1rem"} flexDirection={"column"} borderRadius={"4px"} borderBottomRadius={"0px"} bg={"greyScale.grey0"} width={"100%"} height={"auto"}>
                        <Flex width={"100%"} height={"100%"}>
                            <Box width={"100%"} height={"100%"}>
                                <Flex marginBottom={"1rem"} marginTop={"1rem"} gap={"0.5rem"}>
                                    <Text color={"greyScale.whiteFixed"} fontSize="titleSections" fontWeight={"titleSections"}>
                                        Populars
                                    </Text>
                                    <Text color={"brand.brand2"} fontSize="titleSections" fontWeight={"titleSections"}>
                                        this month
                                    </Text>
                                </Flex>
                                <Flex className={style.carouselCards}>
                                    <CarouselResponsive removeArrowOnDeviceType={["tabletSmall", "mobile","tablet"]} infinite={true} itemClass={style.item_slider} swipeable={true}    
                                responsive={responsive}
                                containerClass={style.carouselResponsive}>
                                        <Card src={berserk}></Card>
                                        <Card src={vagabond}></Card>   
                                        <Card src={solo_leveling}></Card>
                                        <Card src={vinland}></Card>    
                                        <Card src={begining}></Card>      
                                    </CarouselResponsive>
                                </Flex>
                            </Box>
                        </Flex>
                </Flex>
        </Flex>
    )
}