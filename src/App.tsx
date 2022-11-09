import { ThemeProvider } from "styled-components"
import { BackGround } from "./components/BackGround"
import { MustangCard } from "./components/MustangCard"
import { GlobalStyle, MainContainer } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import mustangImageRed from "./assets/images/mustang-red.png"
import mustangImageSilver from "./assets/images/mustang-silver.png"
import mustangImageClassic from "./assets/images/mustang-classic.png"
import { MustangGroup } from "./styles/appStyles"
import { TopGround } from "./components/TopGround"

function App() {
  return (
  <ThemeProvider theme={defaultTheme}>
    <MainContainer>
      <TopGround/>
        <MustangGroup>
            <MustangCard title="Mustang"  image={mustangImageRed}/>
            <MustangCard title="Mustang"  image={mustangImageSilver}/>
            <MustangCard title="Mustang"  image={mustangImageClassic}/>
        </MustangGroup>
      <BackGround/>
      <GlobalStyle/>
      </MainContainer>
    </ThemeProvider>
  )
}

export default App


