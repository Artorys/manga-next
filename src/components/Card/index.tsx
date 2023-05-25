"use client"

import { Flex } from "@chakra-ui/react"
import Image from "next/image"

interface IPropsCard{
    src : string
}

export function Card(props : IPropsCard){
    return (
        <Flex>
            <Image alt="Manga cards" src={props.src}></Image>
        </Flex>
    )
}