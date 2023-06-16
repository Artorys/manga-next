"use client"
import { Flex, Heading,Text } from "@chakra-ui/react";

export default function Logo(){
    return(
        <Flex alignItems={"center"} gap={"0.2rem"}>
            <Heading margin={0} color={"brand.brand4"} fontSize={"logo"} fontWeight={"logo"} as={"h1"}>
                Yuki
            </Heading>
            <Text color={"brand.brand4"} fontSize={"logo"} fontWeight={"logo"} border={"solid 3px"} as={"span"}>
                雪
            </Text>
        </Flex> 
    )
}