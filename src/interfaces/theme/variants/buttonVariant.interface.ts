import { IVariant } from "../theme.interface";


export interface IButtonVariant extends IVariant {
    variants : {
        [key : string]: {
            backgroundColor?: string
            color?: string
            borderColor?: string
            _hover?: {
                backgroundColor: string
              },
          },
    }
}