
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
    "miniCardButtonFlag" : {
      width : "auto",
      height : "1rem",
      padding: "0.2rem",
    },
    "carouselButtonChapter":
    {
      padding: " 0 0.25rem",
      width : "auto",
      height : "32px"
    },
    "cardButtonChapter":
    {
      padding: " 0 0.25rem",
      width : "auto",
      height : "1rem"
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
    "modalCategories" : {
      padding: "0.5rem 1.5rem",
      width : "auto",
      height : "auto",
      minHeight : "34px"
    },
    "mangaPrimary" : {
      padding: "0.5rem 1.5rem",
      width : "100%",
      height : "auto",
      minHeight : "34px"
    },
    "mangaSecondary" : {
      padding: "0.2rem 1rem",
      width : "100%",
      height : "auto",
      minHeight : "25px",
    }
  },
  variants: {
    "submit" : {
      marginTop : "1rem",
      borderRadius : "5px",
      backgroundColor: "#1B6FA8",
      color: "#FAFCFC",
      _hover : {
        transition : "0.5s",
        boxShadow : "5px 5px 0px 0px #F4B333",
      },
      
    },
    "googleSubmit" : {
      border : "solid 1px #1F1F1F80",
      marginTop : "1rem",
      borderRadius : "5px",
      backgroundColor: "#FAFCFC",
      color: "#1F1F1F80",
      _hover : {
        transition : "0.5s",
        boxShadow : "5px 5px 0px 0px #F4B333",
      },
      
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
    "miniCardButtonFlag":{
      fontWeight : "500",
      fontSize : "0.4375rem",
      letterSpacing : '0.2rem',
      backgroundColor: "#FAFCFC",
      color : "#1F1F1F"
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
    "cardButtonChapter":
    {
      textAlign : "center",
      fontWeight : "600",
      fontSize : "0.4375rem",
      letterSpacing : '0.2rem',
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
    },
    "modalCategories" : {
      border : "solid 1px #1F1F1F",
      borderRadius : "5px",
      fontWeight : "600",
      fontSize : "0.6875rem",
      letterSpacing : '0.8px',
      backgroundColor: "#FAFCFC", 
      color : "#1F1F1F",
      _hover : {
        transition : "0.5s",
        boxShadow : "5px 5px 0px 0px #F4B333",
      },
    },
      "modalCategoriesConfirm" : {
        border : "solid 1px #1F1F1F",
        borderRadius : "5px",
        fontWeight : "500",
        fontSize : "1rem",
        letterSpacing : '0.8px',
        backgroundColor: "#FAFCFC", 
        color : "#1F1F1F",
        _hover : {
          transition : "0.5s",
          boxShadow : "5px 5px 0px 0px #F4B333",
        },
    },
    "modalCategoriesActive" : {
        backgroundColor: "#1B6FA8", 
        color : "#FAFCFC",
      },
    "mangaPrimary" : {
      textAlign : "center",
      border : "solid 1px #1F1F1F",
      fontWeight : "700",
      fontSize : "0.75rem",
      letterSpacing : '0.8px',
      backgroundColor: "#1B6FA8", 
      color : "#FAFCFC",
      wordWrap : "break-all",
      whiteSpace : "normal",
      _hover : {
        backgroundColor: "#FAFCFC", 
        color : "#1F1F1F",
      }
    },
    "manga" : {
      textAlign : "center",
      border : "solid 1px #1F1F1F",
      fontWeight : "500",
      fontSize : "0.75rem",
      letterSpacing : '0.8px',
      backgroundColor: "#FAFCFC", 
      color : "#1F1F1F",
      wordWrap : "break-all",
      whiteSpace : "normal"
  },
  "mangaInfo" : {
    border : "solid 1px #1F1F1F",
    borderRadius : "5px",
    fontWeight : "500",
    fontSize : "0.75rem",
    letterSpacing : '0.8px',
    backgroundColor: "#FAFCFC", 
    color : "#1F1F1F",
  }
  },
};
export default buttonVariant