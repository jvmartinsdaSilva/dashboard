import styled from "styled-components";


export const Container = styled.form`
    display: flex;
    flex-direction: column;
    width: 60%;
    background: ${props => props.theme.bgColors.bgColor1};
    border-radius: 10px;
    margin: 3em auto;
    padding: 1.25em;

    @media (max-width: ${props => props.theme.mediaQuery}){
        width: 90%;
    }
`

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    
`

export const Title = styled.h2`
        font-size: 20px;
        font-family: sans-serif;
        color: ${props => props.theme.primary.color_default};
        text-align: center;
`