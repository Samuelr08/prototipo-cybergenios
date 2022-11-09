import styled from "styled-components";
import  background from "../../assets/images/background.png"


export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 540px;
    background-image: url(${background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 92px;
`;

export const DescriptionBox = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    

`;

export const DescriptionGroup = styled.div`
    display: flex;
    flex-direction: column;
    width: 616px;
    height: 100%;
    justify-content: center;
    color: ${props => props.theme.colors.white};
    align-items: flex-end;
    margin-right: calc((100vw - 1080px)/2);
    margin-left: 16px;


    h1  {
        font-weight: 400;
        font-size: ${props => props.theme["sizes-desktop"].h1};
        margin-bottom: 16px;
        text-align: right;
        line-height: 1.5;
        
    }

    p {
        font-weight: 300;
        font-size: ${props => props.theme["sizes-desktop"].md};
        line-height: 2;
        text-align: right;
        margin-bottom: 32px;
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 270px;
        height: 48px;
        background-color: transparent;
        color: ${props => props.theme.colors.white};
        border: 1px solid ${props => props.theme.colors.white};
        border-radius: 4px;
    }

`;

export const DescriptionBlur = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 55%;
    height: 100%;
    backdrop-filter: blur(8.5px);
    background: linear-gradient(270deg, rgba(29, 37, 39, 0.6) 0%, rgba(29, 37, 39, 0.6) 24.79%, rgba(29, 37, 39, 0.534) 54.48%, rgba(29, 37, 39, 0.006) 78.67%, rgba(29, 37, 39, 0) 100%);
    filter: opacity(80%);
`;

