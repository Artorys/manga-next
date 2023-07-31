import { IVariant } from "../theme.interface";


export interface IButtonVariant extends IVariant {
    variants : {
        [key : string]: {
            marginTop? : string
            borderRadius? : string;
            fontWeight? : string
            letterSpacing? : string
            fontSize? : string
            backgroundColor?: string
            color?: string
            borderColor?: string
            _hover?: {
                backgroundColor: string
              },
          },
    }
}