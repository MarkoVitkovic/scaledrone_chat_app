import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext()

export const ContextProvider = ({children}) => {
    
    const [user, setUser] = useState('')
    const [color, setColor] = useState('')
    const [avatar, setAvatar] = useState('')
    const [login, setLogin] = useState(false)

    return (
        <StateContext.Provider value={{ user, setUser, color, setColor, avatar, setAvatar, login, setLogin }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)
