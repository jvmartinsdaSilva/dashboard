import styled from "styled-components";

export const Container  = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    @media (max-width: ${props => props.theme.mediaQuery}){
        align-content: space-between;
    }
`

export const MessageContainer = styled.div`
    height: 150px;
    text-align: center;
    font-size: 1.2rem;
    color: ${props => props.theme.font.color_default};
`