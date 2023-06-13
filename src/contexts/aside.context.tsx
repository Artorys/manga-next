import { createContext, useState,SetStateAction, Dispatch,ReactNode } from "react"

type pagesType = "/home" | "/discover" | "/authors" | "/notifications"
| "/profile" | "/mylist" | "/settings" | "/donate"

type IStyleProp = {
  [key in pagesType] : string | ""
}

interface IAsideContextProps{
    styleItems : IStyleProp
    setItemsStyle : Dispatch<SetStateAction<IStyleProp>>
}
interface IAsideProviderProps{
    children : ReactNode
}

export const AsideContext = createContext<IAsideContextProps>({} as IAsideContextProps)


export function AsideProvider(props : IAsideProviderProps){
    
    
    const [styleItems,setItemsStyle] = useState<IStyleProp>({
        "/authors" : "",
        "/discover" : "",
        "/donate" : "",
        "/home" : "",
        "/mylist" : "",
        "/notifications" : "",
        "/profile" : "",
        "/settings" : ""
      } as IStyleProp)

    return <AsideContext.Provider value={{setItemsStyle,styleItems}}>{props.children}</AsideContext.Provider>
}