"use client"
import { Flex } from "@chakra-ui/react"
import { Chapter } from "@/components/Chapter"
import { SearchBar } from "@/components/SearchBar"

export default function MangaChaptersPage(){
return(
    <Flex gap={"1rem"} mt={"1rem"} width={"100%"} height={"100%"} minHeight={"100vh"} flexDirection={"column"}>
      <Flex justifyContent={"flex-end"}>
        <SearchBar type="number" placeholder="Search chapters" forCards={false} chapters={true}></SearchBar>
      </Flex>
      <Chapter></Chapter>
      <Chapter></Chapter>
      <Chapter></Chapter>
      <Chapter></Chapter>
      <Chapter></Chapter>
      <Chapter></Chapter>
      <Chapter></Chapter>
      <Chapter></Chapter>
      <Chapter></Chapter>
      <Chapter></Chapter>
    </Flex>
  )
}