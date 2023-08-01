import { IVariant } from "../theme.interface";


export interface IButtonVariant extends IVariant {
    variants : {
        [key : string]: {
            border? : string,
            marginTop? : string
            borderRadius? : string;
            fontWeight? : string
            letterSpacing? : string
            fontSize? : string
            backgroundColor?: string
            color?: string
            borderColor?: string
            _hover?: {
                color?: string,
                transition : string,
                backgroundColor?: string,
                border? : string,
                borderRadius? : string,
                borderTop? : number,
                borderBottom? : number,
                borderRight? : number,
                borderLeft? : number,
              },
          },
    }
}