"use client"
import { yupResolver} from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { loginSchema } from "../schemas/login.schema"
import { Flex, Input, InputGroup, InputLeftAddon, Text, useMediaQuery } from "@chakra-ui/react"
import Button from "@/components/Button"
import {AiFillLock } from "react-icons/ai"
import {MdEmail } from "react-icons/md"
import { FcGoogle } from "react-icons/fc"
import { useRouter } from "next/navigation"

export default function LoginPage(){

    const router = useRouter()
    const {register} = useForm({resolver : yupResolver(loginSchema)})
    const [isLargerThanTabletSmall] = useMediaQuery('(min-width: 480px)')

    return (
        <Flex gap={"0.5rem"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
            <InputGroup>
                <InputLeftAddon bg={"brand.brand4"} children={<MdEmail color="#FAFCFC"></MdEmail>}></InputLeftAddon>
                <Input color={isLargerThanTabletSmall ? "greyScale.grey0" : "greyScale.whiteFixed"} width={"100%"} placeholder="Email" {...register("email")}></Input >
            </InputGroup>
            <InputGroup>
                <InputLeftAddon bg={"brand.brand4"} children={<AiFillLock color="#FAFCFC"></AiFillLock>}></InputLeftAddon>
                <Input color={isLargerThanTabletSmall ? "greyScale.grey0" : "greyScale.whiteFixed"} width={"100%"} placeholder="Password" {...register("password")}></Input>
            </InputGroup>
            <Button onClick={()=> router.push("/home")} variant="submit" size="buttonSubmit" text="Log in"></Button>
            <Button leftIcon={<FcGoogle size={"1rem"}></FcGoogle>} variant="googleSubmit" size="buttonSubmit" text="Log in with google"></Button>
            <Flex mt={"1rem"} gap={"0.5rem"}>
                <Text color={"greyScale.grey1"}>Don’t have an account?</Text>
                <Text _hover={{cursor : "pointer"}} onClick={()=> router.push("/register")} color={"brand.brand4"}>Sign up</Text>
            </Flex>
            <Flex gap={"0.5rem"} mt={"0.5rem"}>
                <Text color={"greyScale.grey1"}>Go back To</Text>
                <Text _hover={{cursor : "pointer"}} onClick={()=> router.push("/home")} color={"brand.brand4"}>home page</Text>
            </Flex>
        </Flex>
    )
}