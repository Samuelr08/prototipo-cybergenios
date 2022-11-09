import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 24px;
    align-items: center;
`;

export const Text = styled.span`
    font-weight: 400;
    font-size: ${props => props.theme["sizes-desktop"].sm};
    line-height: 1.5;
    color: ${props => props.theme.colors.primary};

`;

