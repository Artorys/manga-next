"use client"

import Button from "@/components/Button";
import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IDiscoverMangaLayout{
  children : ReactNode
}

export default function DiscoverMangaLayout(props : IDiscoverMangaLayout){
  return (
    <Flex padding={"1rem"} bg={"greyScale.grey0"} flexDirection={"column"} width={"100%"} height={"100%"} minHeight={"100vh"}>
      <Flex width={"100%"}>
          <Button text="Overview" variant="mangaPrimary" size="mangaPrimary"></Button>
          <Button text="Chapters" variant="mangaPrimary" size="mangaPrimary"></Button>
          <Button text="Recommendations" variant="mangaPrimary" size="mangaPrimary"></Button>
      </Flex>
      {props.children}
    </Flex>
  )
}