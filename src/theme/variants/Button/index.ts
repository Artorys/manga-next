
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
    "carouselButton" : {
      width : "80%",
      height : "40.09px"
    },
    "carouselButtonFlag":
    {
      padding: " 0 0.25rem",
      width : "auto",
      height : "32px"
    },
    "cardButtonFlag" : {
      width : "auto",
      height : "12px",
      padding: " 0.2rem",
    },
    "carouselButtonChapter":
    {
      padding: " 0 0.25rem",
      width : "auto",
      height : "32px"
    },
    "categoriesButton":
    {
      padding: " 0 0.75rem",
      width : "auto",
      height : "32px"
    },
    "buttonSubmit":
    {
      padding: " 0 0.75rem",
      width : "100%",
      height : "32px"
    },
  },
  variants: {
    "submit" : {
      marginTop : "1rem",
      borderRadius : "5px",
      backgroundColor: "#1B6FA8",
      color: "#FAFCFC",
      _hover : {
        transition : "0.5s",
        border : "solid 4px #F4B333",
        borderRadius : "5px",
        borderTop : 0,
        borderLeft : 0
      }
      
    },
    "googleSubmit" : {
      border : "solid 1px #1F1F1F80",
      marginTop : "1rem",
      borderRadius : "5px",
      backgroundColor: "#FAFCFC",
      color: "#1F1F1F80",
      _hover : {
        color: "#1F1F1F",
        transition : "0.5s",
        border : "solid 4px #F4B333",
        borderRadius : "5px",
        borderTop : 0,
        borderLeft : 0
      }
      
    },
    "login": {
      backgroundColor: "#1B6FA8",
      color: "#FAFCFC",
    },
    "register" : {
      backgroundColor: "#FAFCFC",
      color: "#1F1F1F",
    },
    "carouselButton" : {
      backgroundColor: "#1B6FA8",
      color: "#FAFCFC",
    },
    "carouselButtonFlag":
    {
      fontWeight : "500",
      fontSize : "0.75rem",
      letterSpacing : '0.5rem',
      backgroundColor: "#FAFCFC",
      color : "#1F1F1F"
    },
    "carouselButtonChapter":
    {
      fontWeight : "600",
      fontSize : "0.688rem",
      letterSpacing : '0.5rem',
      backgroundColor: "#FAFCFC",
      color : "#1F1F1F"
    },
    "categoriesButton" :{
      borderRadius : "5px",
      fontWeight : "600",
      fontSize : "0.75rem",
      letterSpacing : '0.1rem',
      backgroundColor: "#FAFCFC",
      color : "#1F1F1F"
    },
    "cardButtonFlag":{
      fontWeight : "500",
      fontSize : "0.5rem",
      letterSpacing : '0.2rem',
      backgroundColor: "#FAFCFC",
      color : "#1F1F1F"
    }
  },
};
export default buttonVariant