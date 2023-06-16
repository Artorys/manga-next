import {extendTheme } from "@chakra-ui/react"
import buttonVariant from "./variants/Button"
import { ITheme } from "@/interfaces/theme/theme.interface"
import inputVariant from "./variants/Input"


export const customTheme : ITheme = {
    components : {
        Button : buttonVariant,
        Input : inputVariant,
        Text : {
            baseStyle : {
                margin : "0"
            }
        }
    },
    breakpoints : {
        default : "0px",
        phone : "330px",
        tabletSmall : "480px",
        tabletMedium : "600px",
        tabletLarge : "800px",
        desktopSmall : "1024px",
        desktopLarge : "1280px"
    },
    colors : {
        brand  :{
            brand1 : "#E40066",
            brand2 : "#F4B333",
            brand3 : "#9747FF",
            brand4 : "#1B6FA8",

        },
        greyScale : {
            grey0 : "#1F1F1F",
            grey1 : "#1F1F1F80",
            grey10 : "#FAFCFC80",
            whiteFixed : "#FAFCFC"
        }
    },
    fonts : {
        lato : "var(--font-lato)"
    },
    fontSizes : {
        mangaCarousel : {
            title: "2.25rem",
            description : "0.75rem",
            button : "0.875rem",
            buttonChapter : "0.688rem"
        },
        mangaCard : {
            title : "0.75rem",
            author : "0.5rem",
            chapter : "0.563rem",
            genres : "0.438rem",
            score : "0.625rem"
        },
        menuBar : {
            text : "1rem",
            icon : "1.25rem"
        },
        mangaCategories : "0.688rem",
        logo : "2.5rem",
        titleSections : "1.25rem"

    },
    fontWeights : {
        mangaBackground : {
            title: 800,
            description : 600,
            button : 800,
            buttonChapter : 600
        },
        mangaCard : {
            title : 800,
            author : 800,
            chapter : 700,
            genres : 700,
            score : 700
        },
        menuBar : {
            text : 700,
            icon : 800
        },
        mangaCategories : 600,
        logo : 900,
        titleSections : 700
    }

}
export const themeApp = extendTheme(customTheme)