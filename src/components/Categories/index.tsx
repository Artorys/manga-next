"use client"

import { Flex,Box} from "@chakra-ui/react";
import {Text} from "@chakra-ui/react"
import style from "./style.module.css"
import {FaHotjar} from "react-icons/fa"
import Button from "../Button";

export default function Categories(){
    return (
        <Flex width={"100%"} maxWidth={"100%"} height={"100%"} justifyContent={"flex-end"}>
            <Box marginX={"2rem"} width={"auto"} height={"auto"}>
                <Flex gap={"0.25rem"} marginY={"1rem"} display={"flex"} alignItems={"center"}>
                    <Flex alignItems={"center"} gap={"0.25rem"}>
                        <Text margin={0} fontWeight={"titleSections"} fontSize={"titleSections"} color={"brand.brand1"}>Hot</Text>
                        <FaHotjar fill="#E40066"></FaHotjar>
                    </Flex>
                    <Text fontWeight={"titleSections"} fontSize={"titleSections"} color={"greyScale.grey0"}>Categories</Text>
                </Flex>
                <Flex flexWrap={"wrap"} gap={"0.386rem"} padding={"1.125rem"} bg={"brand.brand2"} className={style.categories}>
                    <Button text="Action" size="categoriesButton" variant="categoriesButton"></Button>
                    <Button text="Adventure" size="categoriesButton" variant="categoriesButton"></Button>
                    <Button text="Shounem" size="categoriesButton" variant="categoriesButton"></Button>
                    <Button text="Horror" size="categoriesButton" variant="categoriesButton"></Button>
                    <Button text="Isekai" size="categoriesButton" variant="categoriesButton"></Button>
                    <Button text="Sci-fi" size="categoriesButton" variant="categoriesButton"></Button>
                    <Button text="Mecha" size="categoriesButton" variant="categoriesButton"></Button>
                    <Button text="Action" size="categoriesButton" variant="categoriesButton"></Button>
                    <Button text="Adventure" size="categoriesButton" variant="categoriesButton"></Button>
                    <Button text="Shounem" size="categoriesButton" variant="categoriesButton"></Button>
                    <Button text="Horror" size="categoriesButton" variant="categoriesButton"></Button>
                    <Button text="Isekai" size="categoriesButton" variant="categoriesButton"></Button>
                    <Button text="Sci-fi" size="categoriesButton" variant="categoriesButton"></Button>
                    <Button text="Mecha" size="categoriesButton" variant="categoriesButton"></Button>
                </Flex>
            </Box>
        </Flex>

    )
}