"use client"

import {Button as ButtonChakra} from "@chakra-ui/react"
import { ReactElement } from "react"
interface IButtonProps{
    text : string
    variant : buttonVariantType
    size? : buttonSizesType
    letterSpacing? : string
    leftIcon? : ReactElement;
}
export default function Button(props : IButtonProps){
    return (
        <ButtonChakra leftIcon={props.leftIcon} size={props.size} variant={props.variant} letterSpacing={props.letterSpacing}>{props.text}</ButtonChakra>
    )
}