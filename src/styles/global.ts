import styled,{ createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #EBEFF2;
    }

    body, input, textarea, button {
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

`
export const MainContainer = styled.div`
    
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    overflow-x: hidden;
    position: relative;
`;