
import { IButtonVariant } from "@/interfaces/theme/variants/buttonVariant.interface";

const buttonVariant: IButtonVariant = {
  baseStyle: {
    borderRadius : 0,
    width : "108px",
    height : "43px",
    fontWeight: "600",
    fontFamily: "lato",
  },
  sizes: {
    
  },
  variants: {
    "login": {
      backgroundColor: "#1B6FA8",
      color: "#FAFCFC",
    },
    "register" : {
      backgroundColor: "#FAFCFC",
      color: "#1F1F1F",
    }
  },
};
export default buttonVariant