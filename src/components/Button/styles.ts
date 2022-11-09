import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    line-height: 2;
    padding: 8px 0;
    width: 220px;
    min-height: 48px;
    border-radius: 24px;
    justify-content: center;
    border: 1px solid ${props => props.theme.colors.primary};
    font-size: ${props => props.theme["sizes-desktop"].sm};
    font-weight: 500;
    color: ${props => props.theme.colors.primary};


`;