import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 100vh;
    background: ${props => props.theme.bgColors.bgColor1};
    padding: 0 0 .6em 0 ;

    button{
        margin: 0 2em;
    }

    @media  (max-width: ${props => props.theme.mediaQuery}){
        width: 100%;
        display: ${props => props.isOpen ? "flex" : "none"};
    }

`