import styled from "styled-components";

export const Button = styled.button`
    width: 100px;
    height: 31px;
    border: none;
    border-radius: 5px;
    background: ${props => props.color.color_default};
    color: white;
    cursor: pointer;
    font-size: 16px;
    margin: 0 .35em;

    &:hover{
        background: ${props => props.color.color_bold};

    }
`