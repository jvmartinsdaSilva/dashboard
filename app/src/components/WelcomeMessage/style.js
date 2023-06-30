import styled from "styled-components";

export const Container  = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
`

export const MessageContainer = styled.div`
    margin-top: calc(50% + 75px);
    width: 80%;
    height: 150px;
    text-align: center;
    font-size: 1.2rem;
    color: ${props => props.theme.font.color_default};
`