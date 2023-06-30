import styled from "styled-components";

export const Button = styled.button`
    width: 100px;
    min-height: 30px;
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

    @media (max-width: ${props => props.theme.mediaQuery}) {
        width: 75px;
        font-size: 10px ;
    }
`