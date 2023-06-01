"use client"
import { useDisclosure, Drawer,Text, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter, Flex } from "@chakra-ui/react"
import React from "react"
import { HamburgerIcon } from "../HamburguerIcon"
import {FaCompass,FaDonate} from "react-icons/fa"
import {BsFillPeopleFill} from "react-icons/bs"
import {IoMdNotifications} from "react-icons/io"
import {CgProfile} from "react-icons/cg"
import {CgUserList} from "react-icons/cg"
import {IoMdSettings} from "react-icons/io"

export function SideBar(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef(null)

  return (
    <>
      <HamburgerIcon ref={btnRef} onClick={()=> onOpen()}></HamburgerIcon>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
        size={`xs`}
      >
        <DrawerOverlay/>
        <DrawerContent paddingLeft={`1.9375rem`} paddingTop={`6rem`} backgroundColor={`brand.brand4`}>
          <DrawerCloseButton color={`greyScale.whiteFixed`}/>
          <DrawerBody>
            <Flex flexDirection={`column`} gap={"2.5rem"}>
              <Flex flexDirection={`column`} gap={"1rem"}>
                <Text letterSpacing={`1px`} color={"greyScale.grey10"} fontWeight={`menuBar.text`} fontSize={`menuBar.text`}>
                    Menu -
                </Text>
                <Flex alignItems={`center`} gap={`1rem`}>
                  <Text margin={0} letterSpacing={`1px`} color={"greyScale.whiteFixed"} fontWeight={`menuBar.icon`} fontSize={`menuBar.icon`}>
                    雪
                  </Text>
                  <Text margin={0} letterSpacing={`1px`} color={"greyScale.whiteFixed"} fontWeight={`menuBar.text`} fontSize={`menuBar.text`}>
                    Home
                </Text>
                </Flex>
                <Flex alignItems={`center`} gap={`1rem`}>
                  <Text margin={0} letterSpacing={`1px`} color={"greyScale.whiteFixed"} fontWeight={`menuBar.icon`} fontSize={`menuBar.icon`}>
                    <FaCompass></FaCompass>
                  </Text>
                  <Text margin={0} letterSpacing={`1px`} color={"greyScale.whiteFixed"} fontWeight={`menuBar.text`} fontSize={`menuBar.text`}>
                    Discover comics
                </Text>
                </Flex>
                <Flex alignItems={`center`} gap={`1rem`}>
                    <Text margin={0} letterSpacing={`1px`} color={"greyScale.whiteFixed"} fontWeight={`menuBar.icon`} fontSize={`menuBar.icon`}>
                      <BsFillPeopleFill></BsFillPeopleFill>
                    </Text>
                    <Text margin={0} letterSpacing={`1px`} color={"greyScale.whiteFixed"} fontWeight={`menuBar.text`} fontSize={`menuBar.text`}>
                      Authors
                    </Text>
                </Flex>
                <Flex alignItems={`center`} gap={`1rem`}>
                  <Text margin={0} letterSpacing={`1px`} color={"greyScale.whiteFixed"} fontWeight={`menuBar.icon`} fontSize={`menuBar.icon`}>
                    <IoMdNotifications></IoMdNotifications>
                  </Text>
                  <Text margin={0} letterSpacing={`1px`} color={"greyScale.whiteFixed"} fontWeight={`menuBar.text`} fontSize={`menuBar.text`}>
                    Notifications
                </Text>
                </Flex>
              </Flex>
              <Flex flexDirection={`column`} gap={"1rem"}>
                <Text letterSpacing={`1px`} color={"greyScale.grey10"} fontWeight={`menuBar.text`} fontSize={`menuBar.text`}>
                    General -
                </Text>
                <Flex alignItems={`center`} gap={`1rem`}>
                  <Text margin={0} letterSpacing={`1px`} color={"greyScale.whiteFixed"} fontWeight={`menuBar.icon`} fontSize={`menuBar.icon`}>
                    <CgProfile></CgProfile>
                  </Text>
                  <Text margin={0} letterSpacing={`1px`} color={"greyScale.whiteFixed"} fontWeight={`menuBar.text`} fontSize={`menuBar.text`}>
                    Profile
                </Text>
                </Flex>
                <Flex alignItems={`center`} gap={`1rem`}>
                  <Text margin={0} letterSpacing={`1px`} color={"greyScale.whiteFixed"} fontWeight={`menuBar.icon`} fontSize={`menuBar.icon`}>
                    <CgUserList></CgUserList>
                  </Text>
                  <Text margin={0} letterSpacing={`1px`} color={"greyScale.whiteFixed"} fontWeight={`menuBar.text`} fontSize={`menuBar.text`}>
                    My List
                </Text>
                </Flex>
                <Flex alignItems={`center`} gap={`1rem`}>
                    <Text margin={0} letterSpacing={`1px`} color={"greyScale.whiteFixed"} fontWeight={`menuBar.icon`} fontSize={`menuBar.icon`}>
                      <IoMdSettings></IoMdSettings>
                    </Text>
                    <Text margin={0} letterSpacing={`1px`} color={"greyScale.whiteFixed"} fontWeight={`menuBar.text`} fontSize={`menuBar.text`}>
                      Settings
                    </Text>
                </Flex>
                <Flex alignItems={`center`} gap={`1rem`}>
                  <Text margin={0} letterSpacing={`1px`} color={"greyScale.whiteFixed"} fontWeight={`menuBar.icon`} fontSize={`menuBar.icon`}>
                    <FaDonate></FaDonate>
                  </Text>
                  <Text margin={0} letterSpacing={`1px`} color={"greyScale.whiteFixed"} fontWeight={`menuBar.text`} fontSize={`menuBar.text`}>
                    Donate
                </Text>
                </Flex>   
              </Flex>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}