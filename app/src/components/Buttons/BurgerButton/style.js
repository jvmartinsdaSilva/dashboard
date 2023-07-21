import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-height: 100px;
    padding: .25em;
    background: ${props => props.theme.primary.color_default};
    transition: .5s cubic-bezier(0.55, 0.055, 0.675, 0.19);

    
    &:hover{
        background: ${props => props.theme.primary.color_bold};
        
    }

    @media (min-width: ${props => props.theme.mediaQuery}){
        display: none;
    }
    `

export const Button = styled.button`
    width: 100%;
    color: white;
    border: none;
    background: transparent;
    font-weight: bold;
    cursor: pointer;
    
    `