"use client"
import { Text,Flex, Box } from "@chakra-ui/react";

interface ICathPhraseProps{
    colorTitle? : string
    colorTitleSpan? : string
    colorP? : string
}

export default function Catchphrase(props : ICathPhraseProps){
    return (
        <Flex width={"100%"} height={"100%"} flexDirection={"column"} gap={"1rem"} alignItems={"center"}>
            <Flex width={"100%"} justifyContent={"center"} gap={"0.5rem"} alignItems={"center"}>
                <Text color={props.colorTitle ?? "greyScale.grey0"} fontWeight={"normal"} fontSize={"2.5rem"} as={"h2"}>
                    Welcome
                </Text>
                <Text fontWeight={"normal"} fontSize={"2.5rem"} color={"brand.brand4"} as={"h2"}>
                    Back!
                </Text>
            </Flex>
            <Text textAlign={"center"} color={props.colorP ?? "greyScale.grey1"} fontSize={"0.75rem"} fontWeight={"semibold"} as={"p"}>
                Discover manga, manhua and manhwa, track your progress, have fun, read manga.
            </Text>
        </Flex>
    )
}