
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
    
  },
  variants: {
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
    }
  },
};
export default buttonVariant