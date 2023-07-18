import styled from "styled-components";

export const Container  = styled.div`
    display: flex;
    flex-direction: column;
    align-itens: center;
    justify-content: center;
    width: 100%;
    heigth: 100%;
`

export const MessageContainer = styled.div`
    margin-top: calc(50% - 75px);
    height: 150px;
    text-align: center;
    font-size: 1.2rem;
    color: ${props => props.theme.font.color_default};
`