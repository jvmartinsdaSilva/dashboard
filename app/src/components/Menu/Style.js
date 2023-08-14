import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 300px;
    height: 100%;
    background: ${props => props.theme.bgColors.bgColor1};
    padding: 0 0 .6em 0 ;


    @media  (max-width: ${props => props.theme.mediaQuery}){
        width: 100%;
        display: ${props => props.isOpen ? "flex" : "none"};
    }

`