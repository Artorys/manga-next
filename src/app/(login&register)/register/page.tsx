"use client"
import { yupResolver} from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { registerSchema } from "../schemas/register.schema"
import { Flex, Input, useMediaQuery } from "@chakra-ui/react"
import Button from "@/components/Button"
import {GoPersonFill} from "react-icons/go"

export default function RegisterPage(){

    const {register} = useForm({resolver : yupResolver(registerSchema)})
    const [isLargerThanTabletSmall] = useMediaQuery('(min-width: 480px)')

    return (
        <Flex gap={"0.5rem"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
            {isLargerThanTabletSmall ? 
            <>
            
             <Input color={"greyScale.grey0"} width={"100%"} placeholder="Name" {...register("name")}></Input >
            <Input color={"greyScale.grey0"} width={"100%"} placeholder="Email" {...register("email")}></Input >
            <Input color={"greyScale.grey0"} width={"100%"} placeholder="Password" {...register("password")}></Input>
            </>
            :
            <>
            <Input color={"greyScale.whiteFixed"} width={"100%"} placeholder="Name" {...register("name")}></Input >
            <Input color={"greyScale.whiteFixed"} width={"100%"} placeholder="Type your Email" {...register("email")}></Input >
            <Input color={"greyScale.whiteFixed"} width={"100%"} placeholder="Type your password" {...register("password")}></Input>
            </>
            }
            <Button variant="submit" size="buttonSubmit" text="Register"></Button>
        </Flex>
    )
}