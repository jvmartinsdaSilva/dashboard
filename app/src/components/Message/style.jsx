import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    width: 100%;
    margin: 1em 0 ;
    padding: 0 .25em ;
    text-align: center;
    color: ${props => props.theme.font.color_default};
    font-size: 16px;
`
