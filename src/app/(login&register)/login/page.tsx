"use client"
import { yupResolver} from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { loginSchema } from "../schemas/login.schema"
import { Flex, Input } from "@chakra-ui/react"

export default function LoginPage(){

    const {register} = useForm({resolver : yupResolver(loginSchema)})

    return (
        <Flex flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
            <Input width={"50%"} placeholder="Type your Email" {...register("email")}>    
                
            </Input >
            <Input width={"50%"} placeholder="Type your password" {...register("password")}>
                
            </Input>
        </Flex>
    )
}