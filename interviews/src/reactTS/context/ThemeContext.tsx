import React, { createContext } from 'react';
import { theme } from './theme'

type ThemeContextProps = {
    children: React.ReactNode
}

export const ThemeContext = createContext(theme)

export const ThemeProvider = (props: ThemeContextProps) => {
    return (
        <ThemeContext.Provider value={theme}>{props.children}</ThemeContext.Provider>
    )
}