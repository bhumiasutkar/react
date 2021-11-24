import React, { createContext } from "react";

const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
};

export const ThemeContext = createContext(themes);

const ThemeProvider = ({ children }) => {
    return (
        <ThemeContext.Provider value={themes}>
            {children}
        </ThemeContext.Provider>
    );

};
export default ThemeProvider;