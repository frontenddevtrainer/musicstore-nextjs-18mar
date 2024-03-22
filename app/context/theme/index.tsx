import { createContext, useContext, useState } from "react";

const ThemeContext = createContext<any>({});

const { Provider } = ThemeContext

const ThemeProvider = ({ children } : { children : React.ReactNode }) => {

    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return <Provider value={{ theme, toggleTheme }}>
        {children}
    </Provider>
}

const useThemeContext = () => useContext(ThemeContext)

export {
    ThemeProvider,
    useThemeContext
}