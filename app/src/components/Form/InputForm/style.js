import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    color: ${props => props.theme.font.color_default};
    margin: .5em 0;


    &:focus-within{
        input{
            border-width: 2px;
            border-color:${props => props.theme.primary.color_default};
            color: ${props => props.theme.primary.color_default};
        }

        label{
            color: ${props => props.theme.primary.color_default};
        }
    }

    `

export const Input = styled.input`
    border: 
    1px solid
    ${props => props.theme.font.color_light};
    background-color: ${props => props.theme.bgColors.bgColor1};
    padding: .85em;
    outline: none;
    font-size: 16px;
    font-weight: 510;
    color: ${props => props.theme.font.color_default};

    
    
`

export const Label = styled.label`
    font-size: 20px;
    margin: .37em;
`