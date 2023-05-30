"use client"
import {Text} from "@chakra-ui/react"

interface IPropsGenre{
    text : string

}
export default function Genre(props : IPropsGenre){
    return(
        <>
            <Text margin={0} color={"greyScale.grey1"} fontWeight={"mangaCard.genres"} fontSize={"mangaCard.chapter"}>{props.text}</Text>
            <Text margin={0} as={"span"} color={"greyScale.grey1"} fontWeight={"mangaCard.genres"} fontSize={"mangaCard.chapter"}>-</Text>
        </>
    )
}