import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 280px;
    border: 1px solid ${props => props.theme.colors.primary};
    border-radius: 24px;
    padding: 24px 32px;
    gap: 24px;
    position: relative;
    margin: 120px auto 0;
    
    h1  {
        font-weight: 400;
        font-size: ${props => props.theme["sizes-desktop"].h2};
        margin-top: 16px;
    }

    img {
        position: absolute;
        top: -114px;
        object-fit: contain;
    }
`;
    
export const DetailsGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: 28px;
`;

