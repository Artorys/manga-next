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
import { SearchBar } from "../SearchBar"
import { MiniCard } from "../MiniCard"
import { useRouter } from "next/navigation"
import { useState } from "react"
import {AiOutlineAlignLeft, AiOutlineAppstore} from "react-icons/ai"

interface ICarouselCardsProps{
    cardRoute?: "/popularMonth" | "/recentUploads"
    titleWhite: string,
    titleGolden? : string,
    stateArray? : Array<{}>,
    allCards : boolean,
}

export function CarouselCards(props : ICarouselCardsProps){

    const router = useRouter()
    const [isCardBoxed,setIsCardBoxed] = useState(false)

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
        <Flex as={"section"} width={"auto"} height={props.allCards ? "100%" : "auto"}>
                <Flex paddingBottom={"1.5rem"} paddingLeft={"1.5rem"} flexDirection={"column"} bg={"greyScale.grey0"} width={"100%"} height={"auto"}>
                    <Flex width={"100%"} height={"100%"}>
                        <Box width={"100%"} height={"100%"}>
                            <Flex flexFlow={"wrap"} justifyContent={"space-between"} marginBottom={"1rem"} marginTop={"1rem"}>
                                <Flex alignItems={"center"} gap={"0.5rem"}>
                                    <Text height={"max-content"} color={"greyScale.whiteFixed"} fontSize="titleSections" fontWeight={"titleSections"}>
                                        {props.titleWhite}
                                    </Text>
                                    {
                                    props.titleGolden ? 
                                    <Text height={"max-content"}     color={"brand.brand2"} fontSize="titleSections" fontWeight={"titleSections"}>
                                        {props.titleGolden}
                                    </Text>
                                    : <></>
                                    }
                                </Flex>
                                {
                                props.allCards ?
                                <Flex width={"100%"} marginRight={"1rem"}>
                                    <Flex width={"100%"} justifyContent={"flex-end"} alignItems={"center"} gap={"0.5rem"} height={"auto"}>
                                        <SearchBar setIsCardBoxed={setIsCardBoxed} forCards={true}></SearchBar>
                                    </Flex>
                                </Flex>
                                :   
                                props.cardRoute ? 
                                <Flex onClick={()=> router.push(`/discover/${props.cardRoute}`)} as={"button"} marginRight={"1rem"}>
                                    <Text _hover={{textDecorationLine : "underline",textDecorationColor : "brand.brand2"}} color={"greyScale.whiteFixed"} fontWeight={"bold"}>See more</Text>
                                </Flex>
                                : <></>
                                }
                            </Flex>
                            <Flex className={style.carouselCards}>
                                {
                                props.allCards ? 
                                isCardBoxed ? 
                                <Flex gap={"1rem"} paddingRight={"1rem"} width={"100%"} flexDirection={"row"} flexFlow={"wrap"}>
                                    <Card src={berserk}></Card> 
                                    <Card src={vagabond}></Card>   
                                    <Card src={solo_leveling}></Card>
                                    <Card src={vinland}></Card>    
                                    <Card src={begining}></Card>  
                                    <Card src={berserk}></Card> 
                                    <Card src={vagabond}></Card>   
                                    <Card src={solo_leveling}></Card>
                                    <Card src={vinland}></Card>    
                                    <Card src={begining}></Card>    
                                    <Card src={berserk}></Card> 
                                    <Card src={vagabond}></Card>   
                                    <Card src={solo_leveling}></Card>
                                    <Card src={vinland}></Card>    
                                    <Card src={begining}></Card>           
                                </Flex> 
                                :
                                <Flex gap={"1rem"} paddingRight={"1rem"} width={"100%"} flexDirection={"column"}>
                                    <MiniCard src={berserk}></MiniCard> 
                                    <MiniCard src={vagabond}></MiniCard>   
                                    <MiniCard src={solo_leveling}></MiniCard>
                                    <MiniCard src={vinland}></MiniCard>    
                                    <MiniCard src={begining}></MiniCard>     
                                    <MiniCard src={berserk}></MiniCard> 
                                    <MiniCard src={vagabond}></MiniCard>   
                                    <MiniCard src={solo_leveling}></MiniCard>
                                    <MiniCard src={vinland}></MiniCard>    
                                    <MiniCard src={begining}></MiniCard>    
                                    <MiniCard src={berserk}></MiniCard> 
                                    <MiniCard src={vagabond}></MiniCard>   
                                    <MiniCard src={solo_leveling}></MiniCard>
                                    <MiniCard src={vinland}></MiniCard>    
                                    <MiniCard src={begining}></MiniCard>      
                                </Flex>
                                :
                                <CarouselResponsive removeArrowOnDeviceType={["tabletSmall", "mobile","tablet"]} infinite={true} itemClass={style.item_slider} swipeable={true}    
                            responsive={responsive}
                            containerClass={style.carouselResponsive} sliderClass={style.carouselSlider}>
                                    <Card src={berserk}></Card>
                                    <Card src={vagabond}></Card>   
                                    <Card src={solo_leveling}></Card>
                                    <Card src={vinland}></Card>    
                                    <Card src={begining}></Card>      
                                </CarouselResponsive>
                                }
                            </Flex>
                        </Box>
                    </Flex>
                </Flex>
        </Flex>
    )
}