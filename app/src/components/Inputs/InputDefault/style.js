import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: ${props => props.width ?? '100%'};
    color: ${props => props.color || props.theme.primary.color_default};
    margin: .5em 0;


    &:focus-within{
        input{
            border-width: 2px;
            border-color:${props => props.color || props.theme.primary.color_default};
            color: ${props => props.color || props.theme.primary.color_default};
        }

        label{
            color: ${props => props.color || props.theme.primary.color_default};
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
    height: 1.4rem; 
    width: 100%;
`

export const Label = styled.label`
    font-size: 18px;
    margin: .25em;
`