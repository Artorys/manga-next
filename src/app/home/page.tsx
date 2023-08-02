import Categories from "@/components/Categories";
import style from "./style.module.css";
import CarouselBanner from "@/components/CarouselBanner";
import { CarouselCards } from "@/components/CarouselCards";


export default function HomePage(){

    return (
        <>
            <CarouselBanner></CarouselBanner>
            <Categories></Categories>
            <CarouselCards cardRoute="/popularMonth" allCards={false} titleWhite="Popular" titleGolden="this month"></CarouselCards>
        </>
    )
}