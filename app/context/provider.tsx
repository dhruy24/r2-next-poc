"use client"
import { createContext, useState, useContext} from 'react'

export const AppContext = createContext<any>(null)

export function AppProvider({children}:{children:React.ReactNode}){
    const [state, setState] = useState(0)
    const [userDetails, setUserDetails] = useState("")

    return (
        <AppContext.Provider value={{state, setState, userDetails, setUserDetails}}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext(){
    return useContext(AppContext)
}
