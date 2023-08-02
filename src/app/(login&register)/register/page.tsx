"use client"
import { yupResolver} from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { registerSchema } from "../schemas/register.schema"
import { Flex, Input, InputGroup, InputLeftAddon, useMediaQuery, Text } from "@chakra-ui/react"
import Button from "@/components/Button"
import {GoPerson} from "react-icons/go"
import { AiFillLock } from "react-icons/ai"
import { MdEmail } from "react-icons/md"
import { FcGoogle } from "react-icons/fc"
import { useRouter } from "next/navigation"

export default function RegisterPage(){

    const router = useRouter()

    const {register} = useForm({resolver : yupResolver(registerSchema)})
    const [isLargerThanTabletSmall] = useMediaQuery('(min-width: 480px)')

    return (
        <Flex gap={"0.5rem"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
            <InputGroup>
                <InputLeftAddon bg={"brand.brand4"} children={<GoPerson color="#FAFCFC"></GoPerson>}></InputLeftAddon>
                <Input color={isLargerThanTabletSmall ? "greyScale.grey0" : "greyScale.whiteFixed"} width={"100%"} placeholder="Name" {...register("name")}></Input >
            </InputGroup>
            <InputGroup>
                <InputLeftAddon bg={"brand.brand4"} children={<MdEmail color="#FAFCFC"></MdEmail>}></InputLeftAddon>
                <Input color={isLargerThanTabletSmall ? "greyScale.grey0" : "greyScale.whiteFixed"} width={"100%"} placeholder="Email" {...register("email")}></Input >
            </InputGroup>
            <InputGroup>
                <InputLeftAddon bg={"brand.brand4"} children={<AiFillLock color="#FAFCFC"></AiFillLock>}></InputLeftAddon>
                <Input color={isLargerThanTabletSmall ? "greyScale.grey0" : "greyScale.whiteFixed"} width={"100%"} placeholder="Password" {...register("password")}></Input>
            </InputGroup>
            <Button variant="submit" size="buttonSubmit" text="Register"></Button>
            <Button leftIcon={<FcGoogle size={"1rem"}></FcGoogle>} variant="googleSubmit" size="buttonSubmit" text="Sign in with google"></Button>
            <Flex mt={"1rem"} gap={"0.5rem"}>
                <Text whiteSpace={"nowrap"} color={isLargerThanTabletSmall ? "greyScale.grey1" : "greyScale.whiteFixed"}>Already have an account?</Text>
                <Text whiteSpace={"nowrap"} _hover={{cursor : "pointer"}} onClick={()=> router.push("/login")} color={"brand.brand4"}>Log in</Text>
            </Flex>
            <Flex gap={"0.5rem"} mt={"0.5rem"}>
                <Text color={isLargerThanTabletSmall ? "greyScale.grey1" : "greyScale.whiteFixed"}>Go back To</Text>
                <Text _hover={{cursor : "pointer"}} onClick={()=> router.push("/home")} color={"brand.brand4"}>home page</Text>
            </Flex>
        </Flex>
    )
}