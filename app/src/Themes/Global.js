import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;

    }

    body{
        background: ${props => props.theme.bgColors.bgColor2};
        /* color: ${props => props.theme.font.color_default} */
    }
`
    
