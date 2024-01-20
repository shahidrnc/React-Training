import { createContext,useContext } from "react";
export const themecontext=createContext({
    thememode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{}
})

export const ThemeProvider=themecontext.Provider

export default function usetheme(){
    return useContext(themecontext)
}