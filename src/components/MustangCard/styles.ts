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
`;
