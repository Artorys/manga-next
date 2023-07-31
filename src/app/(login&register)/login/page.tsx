"use client"
import { yupResolver} from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { loginSchema } from "../schemas/login.schema"
import { Flex, Input, useMediaQuery } from "@chakra-ui/react"
import Button from "@/components/Button"

export default function LoginPage(){

    const {register} = useForm({resolver : yupResolver(loginSchema)})
    const [isLargerThanTabletSmall] = useMediaQuery('(min-width: 480px)')

    return (
        <Flex gap={"0.5rem"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
            {isLargerThanTabletSmall ? 
            <>
            <Input color={"greyScale.grey0"} width={"100%"} placeholder="Email" {...register("email")}></Input >
            <Input color={"greyScale.grey0"} width={"100%"} placeholder="Password" {...register("password")}></Input>
            </>
            :
            <>
            <Input color={"greyScale.whiteFixed"} width={"100%"} placeholder="Type your Email" {...register("email")}></Input >
            <Input color={"greyScale.whiteFixed"} width={"100%"} placeholder="Type your password" {...register("password")}></Input>
            </>
            }
            <Button variant="submit" size="buttonSubmit" text="Log in"></Button>
        </Flex>
    )
}