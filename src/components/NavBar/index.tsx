import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Button from "../Button";
import style from "./style.module.css"

export default function Navbar(){
    return (
        <Flex border={"solid 1px"} boxShadow={"1px 1px 3px 0px #1F1F1F"} borderColor={"#1F1F1F"} padding={"1.063rem"} as={"header"} justifyContent={"space-between"} alignItems={"center"}>
            <div>
                <Flex alignItems={"center"} gap={"0.2rem"}>
                    <Heading color={"brand.brand4"} fontSize={"logo"} fontWeight={"logo"} as={"h1"}>
                        Yuki
                        <Text border={"solid 3px"} color={"greyScale.grey1"} as={"span"}>
                            雪
                        </Text>
                    </Heading>
                </Flex>
            </div>
            <nav>
                <Flex as={"ul"} gap={"1.25rem"} className={style.navbar__list}>
                    <li>
                        <Button variant="login" text="Log in"></Button>
                    </li>
                    <li>
                        <Button variant="register" text="Sign Up"></Button>
                    </li>
                </Flex>
            </nav>
        </Flex>
    )
}