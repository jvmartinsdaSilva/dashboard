import styled from "styled-components";


export const Container = styled.p`
    font-size: 16px;
    
    a{
        text-decoration: none;
        color: ${props => props.theme.font.color_default};
    }

    a:hover{
        color: ${props => props.theme.primary.color_default}
    }

`