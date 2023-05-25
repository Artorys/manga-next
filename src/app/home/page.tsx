import Categories from "@/components/Categories";
import style from "./style.module.css";
import Carousel from "@/components/Carousel";

export default function HomePage(){

    return (
        <>
            <Carousel></Carousel>
            <Categories></Categories>
        </>
    )
}