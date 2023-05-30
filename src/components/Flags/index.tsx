import { Flex } from "@chakra-ui/react";
import Button from "../Button";
import { Flag, FlagNameValues } from "semantic-ui-react";

interface IFlagsProps{
    FlagType : "card" | "banner"
    FlagName : FlagNameValues
}

export default function Flags(props : IFlagsProps){
    return (
        props.FlagType == "card" ?
        <Flex margin={"0.3rem"} top={0} left={0} position={"absolute"}>
            <Button size='cardButtonFlag' text='Manwua' variant='cardButtonFlag' leftIcon={<Flag name={props.FlagName}></Flag>}></Button>
        </Flex>
        : 
        props.FlagType == "banner" ? 
        <Flex margin={"1rem"} top={0} right={0} position={"absolute"}>
            <Button size='carouselButtonFlag' text='Manga' variant='carouselButtonFlag' leftIcon={<Flag name={props.FlagName}></Flag>}></Button>
        </Flex>
        : <></>
        
    )
}