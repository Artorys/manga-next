import { useDisclosure, ModalOverlay, ModalBody, ModalFooter, Modal, ModalContent, Flex, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Text, Slider, SliderTrack, SliderFilledTrack, SliderMark, SliderThumb, Tooltip, Center, Box, Stack, InputGroup, InputLeftElement, Input } from "@chakra-ui/react"
import { AiFillFilter } from "react-icons/ai"
import style from "./style.module.css"
import Button from "../Button"
import { useEffect, useState } from "react"
import { FcSearch } from "react-icons/fc"

interface IFilterModalProps{
  margin : string
}

export function FilterModal(props : IFilterModalProps) {

  const [minChapters,setMinChapters] = useState(0)
  const [maxChapters,setMaxChapters] = useState(5)

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Flex onClick={()=> onOpen()} justifyContent={"center"} alignItems={"center"} width={"100%"} height={"100%"} _hover={{cursor : "pointer"}} >
        <AiFillFilter style={{margin : props.margin}} className={`${style.iconCard} ${style.icon}`} fill="#1B6FA8"></AiFillFilter>
      </Flex>
      <Modal size={"5xl"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent width={"100%"} padding={"1rem"} height={"auto"}>
          <ModalBody width={"100%"} height={"100%"}>
            <Flex gap={"2.5rem"} width={"100%"} height={"100%"} flexDirection={"column"}>
              <Flex gap={"2rem"} width={"100%"} height={"auto"} flexDirection={"column"}>
                <Text fontSize={"1rem"} color={"greyScale.grey0"} fontWeight={"bold"}>Chapters -</Text>
                <Flex gap={"2rem"} width={"100%"} height={"auto"} justifyContent={"flex-start"}>
                  <Flex gap={"1.2rem"} width={"max-content"} height={"auto"}>
                    <Flex width={"max-content"} alignItems={"center"} gap={"0.4rem"}>
                      <Text fontWeight="semibold" fontSize={"0.8rem"}>min</Text>
                      <NumberInput value={minChapters} defaultValue={0} width={"100px"} onChange={(value)=> setMinChapters(Number(value))} height={"auto"} min={0} max={maxChapters - 1}>
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </Flex>
                    <Flex width={"max-content"} alignItems={"center"} gap={"0.4rem"}>
                      <Text fontWeight="semibold" fontSize={"0.8rem"}>max</Text>
                      <NumberInput value={maxChapters} defaultValue={5} width={"100px"} onChange={(value)=> setMaxChapters(Number(value))} height={"auto"} size='md' min={minChapters + 1}>
                        <NumberInputField/>
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </Flex>
                  </Flex>
                  <Slider value={minChapters} onChange={(value)=> setMinChapters(value == maxChapters ? value - 1 : value)} min={0} max={maxChapters}>
                    <SliderTrack>
                      <SliderFilledTrack/>
                    </SliderTrack>
                    <SliderThumb>
                      <SliderMark padding={"0.2rem 0.5rem"} borderRadius={"5px"} textAlign='center' bg='brand.brand4' color='greyScale.whiteFixed' mt='-10' ml='-5' w='12' value={minChapters}>{minChapters}</SliderMark>
                    </SliderThumb>
                    <SliderMark padding={"0.2rem 0.5rem"} borderRadius={"5px"} textAlign='center' bg='brand.brand4' color='greyScale.whiteFixed' ml='-5' w='12' value={maxChapters}>{maxChapters}</SliderMark>
                  </Slider>
                </Flex>
              </Flex>
              <Flex width={"100%"}>
                <Stack direction={"row"} width={"auto"} height={"auto"}  justifyContent={"flex-start"} gap={"1.2rem"}>
                  <Flex position={"relative"} width={"auto"} height={"auto"} flexDirection={"column"} gap={"2rem"}>
                    <Text fontSize={"1rem"} color={"greyScale.grey0"} fontWeight={"bold"}>State -</Text>
                    <Flex gap={"1rem"}>
                      <Button text="Complete" variant="modalCategories" size="modalCategories"></Button>
                      <Button text="Continuous" variant="modalCategories" size="modalCategories"></Button>
                    </Flex>
                  </Flex>
                  <Box height={"100%"} width={"1px"} bg={"greyScale.grey1"}></Box>
                  <Flex width={"auto"} height={"auto"} flexDirection={"column"} gap={"2rem"}>
                  <Text fontSize={"1rem"} color={"greyScale.grey0"} fontWeight={"bold"}>Type -</Text>
                    <Flex gap={"1rem"}>
                        <Button text="All" variant="modalCategories" size="modalCategories"></Button>
                        <Button text="Manga" variant="modalCategories" size="modalCategories"></Button>
                        <Button text="Manhua" variant="modalCategories" size="modalCategories"></Button>
                        <Button text="Manhwa" variant="modalCategories" size="modalCategories"></Button>
                    </Flex>
                  </Flex>
                </Stack>
              </Flex>
              <Flex flexDirection={"column"} width={"100%"} gap={"1.5rem"}>
                <Text fontSize={"1rem"} color={"greyScale.grey0"} fontWeight={"bold"}>Categories -</Text>
                <Flex direction={"column"} gap={"0.5rem"}>
                  <Flex gap={"1rem"}>
                    <Button text="Action" variant="modalCategories" size="modalCategories"></Button>
                    <Button text="Anthropomorphic" variant="modalCategories" size="modalCategories"></Button>
                  </Flex>
                  <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                      <FcSearch></FcSearch>
                    </InputLeftElement>
                    <Input type='tel' placeholder='Category name' />
                  </InputGroup>
                  <Flex sx={{ '::-webkit-scrollbar-thumb': {
                    background: "var(--chakra-colors-brand-brand4)",
                  },"::-webkit-scrollbar-thumb:hover" : {
                    background: "var(--chakra-colors-brand-brand4)"
                  }, "::-webkit-scrollbar-track" : {
                    border : "solid 1px",
                  }}} gap={"1rem"} padding={"1rem 1rem 1rem 0"} flexFlow={"row nowrap"} overflowX={"auto"}>
                    <Button text="Action" variant="modalCategories" size="modalCategories"></Button>
                    <Button text="Anthropomorphic" variant="modalCategories" size="modalCategories"></Button>
                    <Button text="Action" variant="modalCategories" size="modalCategories"></Button>
                    <Button text="Anthropomorphic" variant="modalCategories" size="modalCategories"></Button>
                    <Button text="Action" variant="modalCategories" size="modalCategories"></Button>
                    <Button text="Anthropomorphic" variant="modalCategories" size="modalCategories"></Button>
                    <Button text="Action" variant="modalCategories" size="modalCategories"></Button>
                    <Button text="Anthropomorphic" variant="modalCategories" size="modalCategories"></Button>
                    <Button text="Action" variant="modalCategories" size="modalCategories"></Button>
                    <Button text="Anthropomorphic" variant="modalCategories" size="modalCategories"></Button>
                    <Button text="Action" variant="modalCategories" size="modalCategories"></Button>
                    <Button text="Anthropomorphic" variant="modalCategories" size="modalCategories"></Button>
                    <Button text="Action" variant="modalCategories" size="modalCategories"></Button>
                    <Button text="Anthropomorphic" variant="modalCategories" size="modalCategories"></Button>
                    <Button text="Action" variant="modalCategories" size="modalCategories"></Button>
                    <Button text="Anthropomorphic" variant="modalCategories" size="modalCategories"></Button>
                    <Button text="Action" variant="modalCategories" size="modalCategories"></Button>
                    <Button text="Anthropomorphic" variant="modalCategories" size="modalCategories"></Button>
                    <Button text="Action" variant="modalCategories" size="modalCategories"></Button>
                    <Button text="Anthropomorphic" variant="modalCategories" size="modalCategories"></Button>
                    <Button text="Action" variant="modalCategories" size="modalCategories"></Button>
                    <Button text="Anthropomorphic" variant="modalCategories" size="modalCategories"></Button>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </ModalBody>
          <ModalFooter display={"flex"} justifyContent={"flex-start"} gap={"1rem"}>
            <Button Onclick={()=> onClose()} text="Cancel" variant="modalCategoriesConfirm" size="modalCategories"></Button>
            <Button text="Filter" variant="modalCategoriesConfirm" size="modalCategories"></Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}