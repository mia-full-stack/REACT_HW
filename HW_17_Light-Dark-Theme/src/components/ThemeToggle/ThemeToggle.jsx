import { useContext } from "react"
import styled from "@emotion/styled"
import { ThemeContext } from "../ThemeContext/ThemeContext"

const ToggleButton = styled.button`
  background-color: ${(props) => props.theme.palette.primary.main};
  color: ${(props) => props.theme.palette.primary.contrastText};
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 20px;

  &:hover {
    background-color: ${(props) => props.theme.palette.primary.dark};
  }
`

const ThemeToggle = () => {
    const { isDarkMode, toggleTheme, theme } = useContext(ThemeContext)

    return (
        <ToggleButton theme={theme} onClick={toggleTheme}>
            Переключить на {isDarkMode ? "светлую" : "тёмную"} тему
        </ToggleButton>
    )
}

export default ThemeToggle
