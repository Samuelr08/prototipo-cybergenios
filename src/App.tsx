import { ThemeProvider } from "styled-components"
import { BackGround } from "./components/BackGround"
import { MustangCard } from "./components/MustangCard"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import mustangImageRed from "./assets/images/mustang-red.png"
import mustangImageSilver from "./assets/images/mustang-silver.png"
import mustangImageClassic from "./assets/images/mustang-classic.png"
import { MustangGroup } from "./styles/appStyles"
import { Header } from "./components/Header"

function App() {
  return (
  <ThemeProvider theme={defaultTheme}>
      <Header/>
        <MustangGroup>
            <MustangCard title="Mustang"  image={mustangImageRed}/>
            <MustangCard title="Mustang"  image={mustangImageSilver}/>
            <MustangCard title="Mustang"  image={mustangImageClassic}/>
        </MustangGroup>
      <BackGround/>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App


