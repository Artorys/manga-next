"use client"

import { CarouselCards } from "@/components/CarouselCards";

export default function DiscoverRecentUploadsPage(){

    return (
        <>
            <CarouselCards cardRoute="/recentUploads" allCards={true} titleWhite="Recent" titleGolden="Uploads"></CarouselCards>
        </>
    )
}