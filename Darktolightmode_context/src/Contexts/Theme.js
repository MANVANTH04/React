import React, { createContext, useContext } from "react";

export const themeContext = createContext({     // created the context with some default values
    themeMode: "light",
    darkTheme: ()=>{},
    lightTheme: ()=>{}
})

export const ThemeProvider = themeContext.Provider  // here we set the provider to provide info to all required components 

// we can do some shortcut. and that is, we can create a hook so that people can use that hook
// with out using the usecontext(themeContext)


export default function useTheme(){
    return useContext(themeContext)
}


