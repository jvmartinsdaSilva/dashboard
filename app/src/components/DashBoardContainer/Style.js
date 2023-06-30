import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
    color: ${props => props.theme.font.color_default};


    @media  (max-width: ${props => props.theme.mediaQuery}){
            overflow: hidden;
            flex-direction: column;
    }


`