import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    background: ${props => props.theme.bgColors.bgColor1};
    border-radius: 10px;
    margin: 1em auto;
    padding: 1em;
    

    h2{
        font-size: 20px;
        font-family: sans-serif;
        color: ${props => props.theme.primary.color_default};
        text-align: center;
    }

`