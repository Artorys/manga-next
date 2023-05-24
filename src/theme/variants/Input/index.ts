
import { IInputVariant } from "@/interfaces/theme/variants/inputVariant.interface";

const inputVariant: IInputVariant = {
  baseStyle: {
  },
  sizes: {
    
  },
  variants: {
    "filter" : {
        field: {
            color : "#1F1F1F80",
            fontWeight: "normal",
            fontFamily: "lato",
            borderRadius : "25px",
            shadow : "1px 4px 1px 1px #F4B333",
            border: "1px solid #1F1F1F",
            _focus: {
                color : "#1F1F1F",
            },
        }
    }
  },
};
export default inputVariant