import { IButtonVariant } from "./variants/buttonVariant.interface"
import { IInputVariant } from "./variants/inputVariant.interface"

export interface IVariant{
    baseStyle?: {
      },
      sizes?: {
        [key : string] : {
        },
      },
      variants: {
        [key : string]:  {   
        },
      },
}
export interface ITheme{
    components : {
        Button : IButtonVariant,
        Input : IInputVariant
    },
    colors : {
        brand: 
        {
            [key : string] : string
        },

    greyScale?: {
        grey1?: string
        grey2?: string
        grey0?: string
        grey3?: string
        grey4?: string
        grey5?: string
        grey6?: string
        grey7?: string
        grey8?: string
        grey9?: string
        grey10?: string
        whiteFixed: string
    },

    feedback?: {
        alert1?: string
        alert2?: string
        alert3?: string
        sucess1?: string
        sucess2?: string
        sucess3?: string
    },
},
    fonts: {
        [key : string] : string
    },
    fontSizes : {
        [key : string]: string | 
        {
            [key : string] : string
        }
    },
    fontWeights: {
        [key : string]: number | 
        {
            [key : string] : number
        }
      },
    breakpoints : {
        default : string
        phone : string
        tabletSmall : string
        tabletLarge : string
        desktopSmall : string
        desktopLarge : string
    }
}