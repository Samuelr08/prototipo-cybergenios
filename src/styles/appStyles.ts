import styled from "styled-components";

export const MustangGroup = styled.div`
    display: flex;
    justify-content: space-around;
    max-width: 1080px;
    margin: 0 auto;
`;

export const MustangGroupContent = styled.div`
    display: flex;
    margin: 0 auto;
    gap: 24px;

    @media (max-width: 1024px) {
        overflow-x: scroll;
        min-width: 90%;
        margin-left: 24px;
        scrollbar-width: none;
        -ms-overflow-style: none;

        &::-webkit-scrollbar {
            background: transparent;
            width: 0px;
        } 

    }

`;