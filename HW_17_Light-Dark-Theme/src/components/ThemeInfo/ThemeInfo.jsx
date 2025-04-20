import { useContext } from "react"
import styled from "@emotion/styled"
import { Paper, Typography } from "@mui/material"
import { ThemeContext } from "../ThemeContext/ThemeContext"

const InfoContainer = styled(Paper)`
  padding: 20px;
  margin-top: 20px;
  background-color: ${(props) => props.theme.palette.background.paper};
  color: ${(props) => props.theme.palette.text.primary};
  border-radius: 8px;
`

const ThemeInfo = () => {
    const { isDarkMode, theme } = useContext(ThemeContext)

    return (
        <InfoContainer theme={theme}>
            <Typography variant="h5" gutterBottom>
                Информация о текущей теме:
            </Typography>
            <Typography variant="body1">Режим: {isDarkMode ? "Тёмный" : "Светлый"}</Typography>
            <Typography variant="body1">Основной цвет: {theme.palette.primary.main}</Typography>
            <Typography variant="body1">Вторичный цвет: {theme.palette.secondary.main}</Typography>
        </InfoContainer>
    )
}

export default ThemeInfo
