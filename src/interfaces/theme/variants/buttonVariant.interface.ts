import { IVariant } from "../theme.interface";


export interface IButtonVariant extends IVariant {
    variants : {
        [key : string]: {
            textAlign?: string,
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
                boxShadow?: string,
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