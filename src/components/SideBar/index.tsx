"use client"
import { useDisclosure, Drawer,Text, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter, Flex, useMediaQuery, forwardRef } from "@chakra-ui/react"
import React, { useContext, useEffect, useState } from "react"
import { HamburgerIcon } from "../HamburguerIcon"
import {FaCompass,FaDonate} from "react-icons/fa"
import {BsFillPeopleFill} from "react-icons/bs"
import {IoMdNotifications} from "react-icons/io"
import {CgProfile} from "react-icons/cg"
import {CgUserList} from "react-icons/cg"
import {IoMdSettings} from "react-icons/io"
import { usePathname } from 'next/navigation'
import style from "./style.module.css"
import { AsideContext } from "@/contexts/aside.context"

export function SideBar(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {setItemsStyle,styleItems} = useContext(AsideContext)
    const pathName = usePathname()

    useEffect(()=>{
      for(const key in styleItems){
        if(key === pathName){
          setItemsStyle((old)=> {
           return {...old,[key] : style.sidebar_item}
          })
        }
      }
    },[])


  return (
    <>
      <HamburgerIcon onClick={()=> onOpen()}></HamburgerIcon>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
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
                <Flex className={styleItems["/home"]} alignItems={`center`} gap={`1rem`}>
                  <Text margin={0} letterSpacing={`1px`} color={"greyScale.whiteFixed"} fontWeight={`menuBar.icon`} fontSize={`menuBar.icon`}>
                    雪
                  </Text>
                  <Text margin={0} letterSpacing={`1px`} color={"greyScale.whiteFixed"} fontWeight={`menuBar.text`} fontSize={`menuBar.text`}>
                    Home
                  </Text>
                </Flex>
                <Flex className={styleItems["/discover"]}  alignItems={`center`} gap={`1rem`}>
                  <Text margin={0} letterSpacing={`1px`} color={"greyScale.whiteFixed"} fontWeight={`menuBar.icon`} fontSize={`menuBar.icon`}>
                    <FaCompass></FaCompass>
                  </Text>
                  <Text margin={0} letterSpacing={`1px`} color={"greyScale.whiteFixed"} fontWeight={`menuBar.text`} fontSize={`menuBar.text`}>
                    Discover comics
                  </Text>
                </Flex>
                <Flex className={styleItems["/authors"]}  alignItems={`center`} gap={`1rem`}>
                    <Text margin={0} letterSpacing={`1px`} color={"greyScale.whiteFixed"} fontWeight={`menuBar.icon`} fontSize={`menuBar.icon`}>
                      <BsFillPeopleFill></BsFillPeopleFill>
                    </Text>
                    <Text margin={0} letterSpacing={`1px`} color={"greyScale.whiteFixed"} fontWeight={`menuBar.text`} fontSize={`menuBar.text`}>
                      Authors
                    </Text>
                </Flex>
                <Flex className={styleItems["/notifications"]}  alignItems={`center`} gap={`1rem`}>
                  <Text margin={0} letterSpacing={`1px`} color={"greyScale.whiteFixed"} fontWeight={`menuBar.icon`} fontSize={`menuBar.icon`}>
                    <IoMdNotifications></IoMdNotifications>
                  </Text>
                  <Text margin={0} letterSpacing={`1px`} color={"greyScale.whiteFixed"} fontWeight={`menuBar.text`} fontSize={`menuBar.text`}>
                    Notifications
                </Text>
                </Flex>
              </Flex>
              <Flex  flexDirection={`column`} gap={"1rem"}>
                <Text letterSpacing={`1px`} color={"greyScale.grey10"} fontWeight={`menuBar.text`} fontSize={`menuBar.text`}>
                    General -
                </Text>
                <Flex className={styleItems["/profile"]} alignItems={`center`} gap={`1rem`}>
                  <Text margin={0} letterSpacing={`1px`} color={"greyScale.whiteFixed"} fontWeight={`menuBar.icon`} fontSize={`menuBar.icon`}>
                    <CgProfile></CgProfile>
                  </Text>
                  <Text margin={0} letterSpacing={`1px`} color={"greyScale.whiteFixed"} fontWeight={`menuBar.text`} fontSize={`menuBar.text`}>
                    Profile
                </Text>
                </Flex>
                <Flex className={styleItems["/mylist"]} alignItems={`center`} gap={`1rem`}>
                  <Text margin={0} letterSpacing={`1px`} color={"greyScale.whiteFixed"} fontWeight={`menuBar.icon`} fontSize={`menuBar.icon`}>
                    <CgUserList></CgUserList>
                  </Text>
                  <Text margin={0} letterSpacing={`1px`} color={"greyScale.whiteFixed"} fontWeight={`menuBar.text`} fontSize={`menuBar.text`}>
                    My List
                </Text>
                </Flex>
                <Flex className={styleItems["/settings"]} alignItems={`center`} gap={`1rem`}>
                    <Text margin={0} letterSpacing={`1px`} color={"greyScale.whiteFixed"} fontWeight={`menuBar.icon`} fontSize={`menuBar.icon`}>
                      <IoMdSettings></IoMdSettings>
                    </Text>
                    <Text margin={0} letterSpacing={`1px`} color={"greyScale.whiteFixed"} fontWeight={`menuBar.text`} fontSize={`menuBar.text`}>
                      Settings
                    </Text>
                </Flex>
                <Flex className={styleItems["/donate"]} alignItems={`center`} gap={`1rem`}>
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