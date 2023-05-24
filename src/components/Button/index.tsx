"use client"

import {Button as ButtonChakra} from "@chakra-ui/react"
interface IButtonProps{
    text : string
    variant : buttonVariantType
}
export default function Button(props : IButtonProps){
    return (
        <ButtonChakra variant={props.variant}>{props.text}</ButtonChakra>
    )
}