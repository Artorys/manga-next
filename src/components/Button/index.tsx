"use client"

import {Button as ButtonChakra, Flex, Text} from "@chakra-ui/react"
import { MouseEventHandler, ReactElement } from "react"
interface IButtonProps{
    Onclick? : MouseEventHandler<HTMLButtonElement>,
    children? : ReactElement
    text? : string
    variant? : buttonVariantType
    size? : buttonSizesType
    letterSpacing? : string
    leftIcon? : ReactElement;
    linkText?: string

}
export default function Button(props : IButtonProps){
    return (
        <ButtonChakra onClick={props.Onclick} leftIcon={props.leftIcon} size={props.size} variant={props.variant} letterSpacing={props.letterSpacing}>
            {
                props.linkText
                ?   <Flex justifyContent={"center"} gap={"0.3rem"}>
                        <Text paddingLeft={"0.2rem"} margin={0}  _hover={{textDecorationLine : "underline", textDecorationColor : "brand.brand2"}}>{props.text}</Text> 
                        <Text margin={0} color={"brand.brand4"}>{props.linkText}</Text>
                    </Flex>
                : props.children ?? props.text

            }
        </ButtonChakra>
    )
}