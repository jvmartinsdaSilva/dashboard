import styled from "styled-components";


export const Label = styled.label`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100px;
    margin: 1.5em; 
    font-size: 16px;
    
    &:hover{
        color: ${props => props.theme.primary.color_default}
    }
`