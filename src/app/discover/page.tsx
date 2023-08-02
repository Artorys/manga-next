"use client"

import { CarouselCards } from "@/components/CarouselCards";
import { Flex } from "@chakra-ui/react";



export default function DiscoverPage(){

    return (
        <>
            <Flex flexDirection={"column"} gap={"1rem"}>
                <CarouselCards cardRoute="/popularMonth" allCards={false} titleWhite="Popular" titleGolden="this month"></CarouselCards>
                <CarouselCards cardRoute="/recentUploads" allCards={false} titleWhite="Recent" titleGolden="uploads"></CarouselCards>
            </Flex>
        </>
    )
}