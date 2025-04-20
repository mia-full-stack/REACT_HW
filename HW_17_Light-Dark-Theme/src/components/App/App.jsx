import { Container, Box, Typography } from "@mui/material"
import { ThemeProvider } from "../ThemeContext/ThemeContext"
import React from "react"
import ThemeToggle from "../ThemeToggle/ThemeToggle"
import ThemeInfo from "../ThemeInfo/ThemeInfo"

function App() {
  return (
    <ThemeProvider>
      <Container maxWidth="md">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            textAlign: "center",
          }}
        >
          <Typography variant="h2" component="h1" gutterBottom>
            Приложение с переключением тем
          </Typography>

          <ThemeInfo />
          <ThemeToggle />
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default App
