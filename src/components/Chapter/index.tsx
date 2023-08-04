import { Flex, Text } from "@chakra-ui/react";
import { AiOutlineEye } from "react-icons/ai";
import { BsDownload } from "react-icons/bs";
import { FaComments } from "react-icons/fa";

export function Chapter(){
  return(
    <Flex borderRadius={"5px"} padding={"1rem"} bg={"greyScale.whiteFixed"} justifyContent={'space-between'}>
      <Text color={"greyScale.grey0"} fontWeight={"normal"} fontSize={"0.875rem"}>Chapter1</Text>
      <Flex alignItems={"center"} gap={"0.5rem"}>
          <AiOutlineEye fill="#1B6FA8"></AiOutlineEye>
          <FaComments fill="#1B6FA8"></FaComments>
          <BsDownload fill="#1B6FA8"></BsDownload>
      </Flex>
    </Flex>
  )
}