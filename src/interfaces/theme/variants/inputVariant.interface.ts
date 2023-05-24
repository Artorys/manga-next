import { IVariant } from "../theme.interface";


export interface IInputVariant extends IVariant {
    variants : {
        [key : string]: {
            field : {
                fontFamily?: string
                fontWeight?: number | string
                fontSize?: string
                borderRadius? : string
                shadow?: string
                backgroundColor?: string
                color?: string
                borderColor?: string
                _hover?: {
                    backgroundColor: string
                  },
                  border? : string,
                _focus? : {
                    color? : string
                    border? : string
                }
              },
            }
    }
}