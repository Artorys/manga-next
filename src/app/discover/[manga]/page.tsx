"use client"
import Button from "@/components/Button"
import { Flex, Text, Box, Slider, SliderFilledTrack, SliderThumb, SliderTrack, SliderMark, useMediaQuery } from "@chakra-ui/react"
import Image from 'next/image'
import { RiStarSFill } from "react-icons/ri"
import onePiece from "../../../assets/img/OnePieceBackground.jpeg"
import style from  "./style.module.css"
import { BsChatSquareHeartFill } from "react-icons/bs"
import { useState } from "react"
import { CarouselCards } from "@/components/CarouselCards"

export default function MangaPage(){

  const [mangaRate,setMangaRate] = useState(0)
  const [isLargerThanDesktopSmall] = useMediaQuery('(min-width: 1024px)')
  
  return (  
    !isLargerThanDesktopSmall ? 
      <Flex mt={"1rem"} mb={"1rem"} flexDirection={"column"} width={"100%"} height={"100%"}>
        <Flex width={"100%"} height={"max-content"}>
            <Button text="Vol: 104+; Ch: 1069+" variant="manga" size="mangaSecondary"></Button>
            <Button text="Weekly Shonen Jump" variant="manga" size="mangaSecondary"></Button>
            <Button text="1997 - ?" variant="manga" size="mangaSecondary"></Button>
            <Button leftIcon={<RiStarSFill className={style.star_icon}></RiStarSFill>} text="9.32" variant="manga" size="mangaSecondary"></Button>
            <Button text="Rank #3" variant="manga" size="mangaSecondary"></Button>
        </Flex>
        <Flex gap={"1rem"} justifyContent={"flex-end"} flexDirection={"column"} padding={"1rem"} position={"relative"} width={"100%"} height={"100%"}>
          <Image fill={true} className={`${style.image} ${style.right_gradient}`} alt="One piece background" src={onePiece}></Image>
          <Flex width={"100%"} height={"max-content"} padding={"1rem"} flexDirection={"column"} gap={"1rem"}>
            <Text fontSize={"0.75rem"} color={"greyScale.whiteFixed"}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate sit assumenda earum nulla, beatae accusamus voluptates sed ullam! Beatae possimus error quia molestias maxime totam earum, soluta adipisci id deleniti.</Text>
            <Flex flexDirection={"column"} gap={"0.5rem"}>
              <Text fontWeight={"bold"} fontSize={"0.875rem"} color={"greyScale.whiteFixed"}>Category</Text>
              <Flex flexFlow={"row wrap"} gap={"0.5rem"}>
                <Button text="Action" variant="mangaInfo" size="modalCategories" ></Button>
                <Button text="Action" variant="mangaInfo" size="modalCategories" ></Button>
                <Button text="Action" variant="mangaInfo" size="modalCategories" ></Button>
                <Button text="Action" variant="mangaInfo" size="modalCategories" ></Button>
              </Flex>
            </Flex>
            <Flex flexDirection={"column"} gap={"0.5rem"}>
              <Text fontWeight={"bold"} fontSize={"0.875rem"} color={"greyScale.whiteFixed"}>My list</Text>
              <Flex flexFlow={"row wrap"} gap={"0.5rem"}>
                <Button text="Reading" variant="mangaInfo" size="modalCategories" ></Button>
                <Button text="Want to read" variant="mangaInfo" size="modalCategories" ></Button>
                <Button text="Stalled" variant="mangaInfo" size="modalCategories" ></Button>
                <Button text="Dropped" variant="mangaInfo" size="modalCategories" ></Button>
                <Button text="Won´t read" variant="mangaInfo" size="modalCategories" ></Button>  
              </Flex>
            </Flex>
          </Flex>
          <Flex padding={"1rem"} gap={"1rem"}>
            <Box width={"40px"} height={"25px"} borderRadius={"100%"} backgroundColor={"#E40066"}>
              <BsChatSquareHeartFill size={"40px"} fill="#FAFCFC"></BsChatSquareHeartFill>
            </Box>
            <Slider onChange={(value)=> setMangaRate(value)} aria-label='slider-ex-1' defaultValue={0} min={0} max={10}>
              <SliderTrack>
                <SliderFilledTrack  bg={"#E40066"} />
              </SliderTrack>
              <SliderThumb>
                <SliderMark padding={"0.2rem 0.5rem"} borderRadius={"5px"} textAlign='center' bg='brand.brand1' color='greyScale.whiteFixed' mt='-10' ml='-5' w='12' value={mangaRate}>{mangaRate}</SliderMark>
              </SliderThumb>
            </Slider>
          </Flex>
        </Flex>
        <CarouselCards allCards={false} titleWhite="If you like this manga, you might like"></CarouselCards>
      </Flex>
   :
      <Flex mt={"1rem"} mb={"1rem"} flexDirection={"column"} width={"100%"} height={"100%"}>
        <Flex width={"100%"} height={"max-content"}>
            <Button text="Vol: 104+; Ch: 1069+" variant="manga" size="mangaSecondary"></Button>
            <Button text="Weekly Shonen Jump" variant="manga" size="mangaSecondary"></Button>
            <Button text="1997 - ?" variant="manga" size="mangaSecondary"></Button>
            <Button leftIcon={<RiStarSFill className={style.star_icon}></RiStarSFill>} text="9.32" variant="manga" size="mangaSecondary"></Button>
            <Button text="Rank #3" variant="manga" size="mangaSecondary"></Button>
        </Flex>
        <Flex gap={"1rem"} padding={"1rem"} position={"relative"} width={"100%"} height={"100%"}>
          <Flex flexDirection={"column"} position={"relative"} width={"100%"} height={"100%"}>
            <Image className={`${style.image} ${style.left_gradient}`} alt="One piece background" src={onePiece}></Image>
            <Flex alignItems={"center"} width={"100%"} height={"max-content"} padding={"1rem"} gap={"1rem"}>
              <Box width={"40px"} height={"25px"} borderRadius={"100%"} backgroundColor={"#E40066"}>
                <BsChatSquareHeartFill size={"40px"} fill="#FAFCFC"></BsChatSquareHeartFill>
              </Box>
              <Slider onChange={(value)=> setMangaRate(value)} aria-label='slider-ex-1' defaultValue={0} min={0} max={10}>
                <SliderTrack>
                  <SliderFilledTrack  bg={"#E40066"} />
                </SliderTrack>
                <SliderThumb>
                  <SliderMark padding={"0.2rem 0.5rem"} borderRadius={"5px"} textAlign='center' bg='brand.brand1' color='greyScale.whiteFixed' mt='-10' ml='-5' w='12' value={mangaRate}>{mangaRate}</SliderMark>
                </SliderThumb>
              </Slider>
          </Flex>
          </Flex>
          <Flex width={"100%"} height={"max-content"} padding={"1rem"} flexDirection={"column"} gap={"1rem"}>
            <Text color={"greyScale.whiteFixed"}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate sit assumenda earum nulla, beatae accusamus voluptates sed ullam! Beatae possimus error quia molestias maxime totam earum, soluta adipisci id deleniti.</Text>
            <Flex flexDirection={"column"} gap={"0.5rem"}>
            <Text  padding={"0.2rem 0.5rem"} fontWeight={"bold"} fontSize={"0.875rem"} width={"max-content"} color={"greyScale.whiteFixed"}>Category</Text>
              <Flex flexFlow={"row wrap"} gap={"0.5rem"}>
                <Button text="Action" variant="mangaInfo" size="modalCategories" ></Button>
                <Button text="Action" variant="mangaInfo" size="modalCategories" ></Button>
                <Button text="Action" variant="mangaInfo" size="modalCategories" ></Button>
                <Button text="Action" variant="mangaInfo" size="modalCategories" ></Button>
              </Flex>
            </Flex>
            <Flex flexDirection={"column"} gap={"0.5rem"}>
            <Text padding={"0.2rem 0.5rem"} fontWeight={"bold"} fontSize={"0.875rem"} width={"max-content"} color={"greyScale.whiteFixed"}>My list</Text>
              <Flex flexFlow={"row wrap"} gap={"0.5rem"}>
                <Button text="Reading" variant="mangaInfo" size="modalCategories" ></Button>
                <Button text="Want to read" variant="mangaInfo" size="modalCategories" ></Button>
                <Button text="Stalled" variant="mangaInfo" size="modalCategories" ></Button>
                <Button text="Dropped" variant="mangaInfo" size="modalCategories" ></Button>
                <Button text="Won´t read" variant="mangaInfo" size="modalCategories" ></Button>  
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <CarouselCards allCards={false} titleWhite="If you like this manga, you might like"></CarouselCards>
      </Flex>
  )
}