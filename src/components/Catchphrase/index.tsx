"use client"
import { Text,Flex } from "@chakra-ui/react";

export default function Catchphrase(){
    return (
        <>
            <Flex gap={"0.5rem"} alignItems={"center"}>
                <Text fontSize={"2rem"} as={"h2"}>
                    Welcome
                </Text>
                <Text fontSize={"2ren"} color={"brand.brand4"} as={"h2"}>
                    Back!
                </Text>
            </Flex>
            <Text color={"greyScale.grey1"} fontSize={"0.75rem"} fontWeight={"semibold"} as={"p"}>
                Discover manga, manhua and manhwa, track your progress, have fun, read manga.
            </Text>
        </>
    )
}