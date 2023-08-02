import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    @media  (max-width: ${props => props.theme.mediaQuery}){
        display: ${props => props.isOpen ? "none" : "flex"};
    }

`