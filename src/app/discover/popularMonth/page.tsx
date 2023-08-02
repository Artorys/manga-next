"use client"

import { CarouselCards } from "@/components/CarouselCards";

export default function DiscoverPopularMonthPage(){

    return (
        <>
             <CarouselCards cardRoute="/popularMonth" allCards={true} titleWhite="Popular" titleGolden="this month"></CarouselCards>
        </>
    )
}