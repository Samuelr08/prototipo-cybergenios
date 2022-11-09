import styled from "styled-components";
import  topGround from "../../assets/images/background-inicial.png"


export const Container = styled.div`
    
    width: 100vw;
    height: 100vh;
    background-image: url(${topGround});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: top;
    border-bottom-left-radius: 0;
`;

export const DescriptionTitle = styled.div`
    display: flex;
    width: 616px;
    justify-content: center;
    color: ${props => props.theme.colors.white};
    align-items:   center;
    margin-right: calc((100vw - 1080px)/2);
    margin-left: 16px;
    height: 100%;
    width: 100%;
    


    h1 {
        font-weight: 400;
        font-size: 9.5rem;
        line-height: 1.5;
        font-family: "Bebas Kai", sans-serif;
        font-weight: bold;
        margin-bottom: auto;
        letter-spacing: 12px;
    }
`;

        export const Subtitles = styled.div`
        display: flex;
        color: white;
        height: 100px;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;

        

        p  {
        font-weight: 100px;
        width: 150px;
        font-size: 20px; 
    }
`;

    export const IconUser = styled.div`
        display: flex;
        font-size: 70px;
        width: 100px;
        align-items: center;
        color: white;
        justify-content: space-between;
    `;

    export const IconLogo = styled.div`
        display: flex;
        font-size: 100%;
        width: 100%;
        align-items: center;
        color: white;
        justify-content: space-between;
    `;


