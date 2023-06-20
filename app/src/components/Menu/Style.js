import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 100%;
    background: ${props => props.theme.bgColors.bgColor1};


    button{
        margin: 0 2em;
    }

    @media  (max-width: 600px){
        width: 100%;
    }

`