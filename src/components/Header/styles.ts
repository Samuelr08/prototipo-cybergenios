import styled from "styled-components";
import  topGround from "../../assets/images/background-inicial.png"


export const Container = styled.div`
    
    width: 100vw;
    height: 100vh;
    background-image: url(${topGround});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 960px) {
        height: calc(100vw * 0.5625);
    }
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

        export const HeaderItems = styled.nav`
        display: flex;
        color: white;
        height: 100px;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        max-width: 1080px;
        margin: 0 auto;
        transition: all 0.2s ease-in-out;

        @media (max-width: 768px) {
            flex-direction: column;
            background-color: ${props => props.theme.colors.white};
            border-top-right-radius: 12px;
            gap: 32px;
            justify-content: flex-start;
            transform: translateX(-270px);
            max-width: 270px;
            height: 100vh;
            position: fixed;
            top: 0;
            z-index: 999;
            color: ${props => props.theme.colors.primary};
            align-items: flex-start;
            padding-left: 24px;
            padding-top: 40px;
        }

        a {
            font-weight: 100px;
            font-size: 20px; 
            cursor: pointer;
        }
`;

    export const IconUser = styled.div`
        display: flex;
        font-size: 20px;
        align-items: center;
        color: white;
        gap: 16px;

        @media (max-width: 768px) {
            color: ${props => props.theme.colors.primary};
        }

        a {
            min-width: 124px;
            text-align: center;

            @media (max-width: 768px) {
                text-align: left;
            }
        }
    `;

    export const IconLogo = styled.div`
        display: flex;
        font-size: 100%;
        width: 100%;
        align-items: center;
        color: white;
        justify-content: flex-start;
        

    `;


