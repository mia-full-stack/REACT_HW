
import { createContext, useState, useMemo } from "react"
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"

// Create context
export const ThemeContext = createContext({
    isDarkMode: false,
    toggleTheme: () => { },
    theme: null,
})

// Create light and dark themes
const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#e91e63",
        },
        secondary: {
            main: "#2196f3",
        },
        background: {
            default: "#fce4ec",
            paper: "#ffffff",
        },
    },
})

const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#90caf9",
        },
        secondary: {
            main: "#f48fb1",
        },
        background: {
            default: "#121212",
            paper: "#1e1e1e",
        },
    },
})

export const ThemeProvider = ({ children }) => {
    // State to track current theme mode
    const [isDarkMode, setIsDarkMode] = useState(false)

    // Function to toggle between light and dark themes
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode)
    }

    // Select current theme based on state
    const currentTheme = isDarkMode ? darkTheme : lightTheme

    // Memoize the context value to prevent unnecessary re-renders
    const contextValue = useMemo(
        () => ({
            isDarkMode,
            toggleTheme,
            theme: currentTheme,
        }),
        [isDarkMode, currentTheme],
    )

    return (
        <ThemeContext.Provider value={contextValue}>
            <MuiThemeProvider theme={currentTheme}>
                <CssBaseline />
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    )
}
export default ThemeProvider;