import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: .25em;

    &:focus-within{
        input{
            border-width: 2px;
            border-color:${props => props.theme.primary.color_bold};
            color: ${props => props.theme.primary.color_bold};
        }

        label{
            color: ${props => props.theme.primary.color_bold};
        }
    }

    `

export const Input = styled.input`
    border: 
    1px solid
    ${props => props.theme.bgColors.bgColor2};
    padding: .85em;
    outline: none;
    font-size: 16px;
    font-weight: 510;
    
`

export const Label = styled.label`
    font-size: 20px;
    margin: .37em;
`