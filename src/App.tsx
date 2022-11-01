import { ThemeProvider } from "styled-components"
import { MustangCard } from "./components/MustangCard"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <MustangCard/>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App
