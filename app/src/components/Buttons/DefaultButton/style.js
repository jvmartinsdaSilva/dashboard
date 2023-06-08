import styled from "styled-components";

export const Button = styled.button`
    width: 150px;
    height: 35px;
    border: none;
    color: white;
    background: ${props => props.theme.primary.color_default};
    cursor: pointer;
    transition:  .4s;
    margin: .5em 0;
    font-size: 18px;

    &:hover{
        background: ${props => props.theme.primary.color_bold};
    }

`