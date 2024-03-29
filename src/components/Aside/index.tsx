"use client"
import { AsideContext } from "@/contexts/aside.context";
import { Box, Flex,Text } from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { BsFillPeopleFill } from "react-icons/bs";
import { CgProfile, CgUserList } from "react-icons/cg";
import { FaCompass, FaDonate } from "react-icons/fa";
import { IoMdNotifications, IoMdSettings } from "react-icons/io";
import style from "./style.module.css"

interface IAsideProps{
  height? : string
}

export function Aside(props : IAsideProps){

    const router = useRouter()
    const {setItemsStyle,styleItems} = useContext(AsideContext)
    const pathName = usePathname()

    useEffect(()=>{
      for(const key in styleItems){
        if(styleItems[key] && key != pathName){
          setItemsStyle((old)=>{
            return {...old, [key] : ""}
          })
        }
        if(pathName.includes(key)){
          setItemsStyle((old)=> {
           return {...old,[key] : style.sidebar_item}
          })
        }
      }
    },[pathName])

    return (
      <Box height={props.height ?? "auto"} className={style.aside}>
        <Flex paddingLeft={{tabletLarge : "1.9375rem",default : "0.5rem"}} paddingRight={"0.5rem"}  paddingTop={`6rem`}>
          <Flex width={"100%"} flexDirection={`column`} gap={"2.5rem"}>
              <Flex width={"100%"} flexDirection={`column`} gap={"1rem"}>
                <Text letterSpacing={`1px`} color={"greyScale.grey10"} fontWeight={`menuBar.text`} fontSize={`menuBar.text`}>
                    Menu -
                </Text>
                <Flex onClick={()=> router.push("/home")} className={`${styleItems["/home"]} ${style.item}`} alignItems={`center`} gap={`1rem`}>
                  <Text margin={0} letterSpacing={`1px`} color={"greyScale.whiteFixed"} fontWeight={`menuBar.icon`} fontSize={`menuBar.icon`}>
                    雪
                  </Text>
                  <Text margin={0} letterSpacing={`1px`} color={"greyScale.whiteFixed"} fontWeight={`menuBar.text`} fontSize={`menuBar.text`}>
                    Home
                  </Text>
                </Flex>
                <Flex onClick={()=> router.push("/discover")} className={`${styleItems["/discover"]} ${style.item}`}  alignItems={`center`} gap={`1rem`}>
                  <Text margin={0} letterSpacing={`1px`} color={"greyScale.whiteFixed"} fontWeight={`menuBar.icon`} fontSize={`menuBar.icon`}>
                    <FaCompass></FaCompass>
                  </Text>
                  <Text margin={0} letterSpacing={`1px`} color={"greyScale.whiteFixed"} fontWeight={`menuBar.text`} fontSize={`menuBar.text`}>
                    Discover comics
                  </Text>
                </Flex>
                <Flex onClick={()=> router.push("/authors")} className={`${styleItems["/authors"]} ${style.item}`}  alignItems={`center`} gap={`1rem`}>
                    <Text margin={0} letterSpacing={`1px`} color={"greyScale.whiteFixed"} fontWeight={`menuBar.icon`} fontSize={`menuBar.icon`}>
                      <BsFillPeopleFill></BsFillPeopleFill>
                    </Text>
                    <Text margin={0} letterSpacing={`1px`} color={"greyScale.whiteFixed"} fontWeight={`menuBar.text`} fontSize={`menuBar.text`}>
                      Authors
                    </Text>
                </Flex>
                <Flex onClick={()=> router.push("/notifications")} className={`${styleItems["/notifications"]} ${style.item}`}  alignItems={`center`} gap={`1rem`}>
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
                <Flex onClick={()=> router.push("/profile")} className={`${styleItems["/profile"]} ${style.item}`} alignItems={`center`} gap={`1rem`}>
                  <Text margin={0} letterSpacing={`1px`} color={"greyScale.whiteFixed"} fontWeight={`menuBar.icon`} fontSize={`menuBar.icon`}>
                    <CgProfile></CgProfile>
                  </Text>
                  <Text margin={0} letterSpacing={`1px`} color={"greyScale.whiteFixed"} fontWeight={`menuBar.text`} fontSize={`menuBar.text`}>
                    Profile
                </Text>
                </Flex>
                <Flex onClick={()=> router.push("/mylist")} className={`${styleItems["/mylist"]} ${style.item}`} alignItems={`center`} gap={`1rem`}>
                  <Text margin={0} letterSpacing={`1px`} color={"greyScale.whiteFixed"} fontWeight={`menuBar.icon`} fontSize={`menuBar.icon`}>
                    <CgUserList></CgUserList>
                  </Text>
                  <Text margin={0} letterSpacing={`1px`} color={"greyScale.whiteFixed"} fontWeight={`menuBar.text`} fontSize={`menuBar.text`}>
                    My List
                </Text>
                </Flex>
                <Flex onClick={()=> router.push("/settings")} className={`${styleItems["/settings"]} ${style.item}`} alignItems={`center`} gap={`1rem`}>
                    <Text margin={0} letterSpacing={`1px`} color={"greyScale.whiteFixed"} fontWeight={`menuBar.icon`} fontSize={`menuBar.icon`}>
                      <IoMdSettings></IoMdSettings>
                    </Text>
                    <Text margin={0} letterSpacing={`1px`} color={"greyScale.whiteFixed"} fontWeight={`menuBar.text`} fontSize={`menuBar.text`}>
                      Settings
                    </Text>
                </Flex>
                <Flex onClick={()=> router.push("/donate")} className={`${styleItems["/donate"]} ${style.item}`} alignItems={`center`} gap={`1rem`}>
                  <Text margin={0} letterSpacing={`1px`} color={"greyScale.whiteFixed"} fontWeight={`menuBar.icon`} fontSize={`menuBar.icon`}>
                    <FaDonate></FaDonate>
                  </Text>
                  <Text margin={0} letterSpacing={`1px`} color={"greyScale.whiteFixed"} fontWeight={`menuBar.text`} fontSize={`menuBar.text`}>
                    Donate
                </Text>
                </Flex>   
              </Flex>
            </Flex>
          </Flex>
      </Box>
    )
}