"use client"

import { Box, Flex, Text } from "@chakra-ui/react";
import {GiPartyPopper} from "react-icons/gi"
import Banner from "../Banner";
import Carousel from "react-multi-carousel";
import style from "./style.module.css"
import { ArrowLeftButton, ArrowRightButton, CarouselButtonGroup} from "../ArrowButtons";

export default function CarouselBanner(){

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };

    return (
        <Flex marginX={"1rem"} as={"section"} width={"auto"} maxWidth={"1136px"} height={"100%"}>
            <Flex justifyContent={"flex-start"} width={"100%"} height={"100%"}>
              <Box className={style.carousel__box}>
                <Flex marginY={"1rem"} alignItems={"center"}>
                    <Flex gap={"0.25rem"}>
                        <Text fontWeight={"titleSections"} fontSize={"titleSections"} margin={0} color={"greyScale.grey0"}>Out</Text>
                        <Text color={"brand.brand1"} fontWeight={"titleSections"} fontSize={"titleSections"}>Now</Text>       
                    </Flex>
                    <GiPartyPopper fill="#E40066"></GiPartyPopper>
                </Flex>
                <Carousel customButtonGroup={<CarouselButtonGroup></CarouselButtonGroup>} customLeftArrow={<ArrowLeftButton></ArrowLeftButton>} customRightArrow={<ArrowRightButton></ArrowRightButton>} containerClass={style.carousel__banner} itemClass={style.carousel__item} responsive={responsive}>
                    <Banner></Banner> 
                    <Banner></Banner>
                    <Banner></Banner>
                    <Banner></Banner>
                </Carousel>
              </Box>
            </Flex>
        </Flex>
    )
}