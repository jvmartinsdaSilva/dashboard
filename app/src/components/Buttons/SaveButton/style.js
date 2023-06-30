import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    padding: .55em;
    align-items: center;
    /* justify-content: center; */
    /* cursor: pointer; */
    `

export const Button = styled.button`
    width: 100%;
    height: 35px;
    font-size: 18px;
    background: ${props => props.theme.greenColors.color_default};
    /* border-radius: 10px; */
    border: none;
    cursor: pointer;
    color: white;

    &:hover{
        background-color: ${props => props.theme.greenColors.color_bold};
    }

`