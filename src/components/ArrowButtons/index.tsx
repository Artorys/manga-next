"use client"
import { Flex } from "@chakra-ui/react"
import style from "./style.module.css"
import {MdKeyboardArrowLeft,MdKeyboardArrowRight} from "react-icons/md"
import { MouseEventHandler } from "react"
import { ButtonGroupProps, CarouselInternalState } from "react-multi-carousel"

interface IArrowButtonProps{
    onClick? : MouseEventHandler<HTMLDivElement> | undefined
    inactive? : boolean
}


export function ArrowLeftButton(props : IArrowButtonProps){
return (
        <Flex alignItems={"center"} justifyContent={"center"} onClick={props.onClick} className={`${style.arrow} ${props.inactive ? style.inactive : ""}`}>
            <MdKeyboardArrowLeft className={`${style.arrow_icon}`}></MdKeyboardArrowLeft>
        </Flex> 
)
}
export function ArrowRightButton(props : IArrowButtonProps){
    return (
        <Flex alignItems={"center"} justifyContent={"center"} onClick={props.onClick} className={`${style.arrow} ${props.inactive ? style.inactive : ""}`}>
            <MdKeyboardArrowRight className={`${style.arrow_icon}`}></MdKeyboardArrowRight>
        </Flex>
    )
}
export const CarouselButtonGroup = ({ next, previous,carouselState}: ButtonGroupProps) => {
        const {currentSlide,totalItems} = carouselState as CarouselInternalState
        const current = currentSlide + 1
        const last = totalItems

        return (
        <Flex justifyContent={"center"} alignItems={"center"} top={"1.2rem"} right={"0"} width={"3.375rem"} gap={"0.604rem"} position={"absolute"}>
            <ArrowLeftButton inactive={current == 1} onClick={()=> previous ? previous() : ()=>{}}></ArrowLeftButton>
            <ArrowRightButton inactive={current == last} onClick={()=> next ? next() : ()=>{}}></ArrowRightButton>
        </Flex>
        ); 

};