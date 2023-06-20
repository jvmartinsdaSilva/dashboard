import styled from "styled-components";


export const PreviewPhoto = styled.label`
    margin: 1.5em auto;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${props => props.image});
    cursor: pointer;
    
`

export const Modal = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #201F1DA4;
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1em auto;
    width: 310px;
    padding: .5em;
    background: ${props => props.theme.bgColors.bgColor2};
    border-radius: 10px;

    input[type="file"]{
        display: none;
    }
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: .5em;
    color: ${props => props.theme.font.color_default};
    font-size: 14px;
    font-weight: normal;
`

export const InputFileContainer = styled.label`
    display: flex;
    flex-direction: column;
    width: 180px;
    height: 30px;
    border: 1px solid ${props => props.theme.primary.color_default};
    color: ${props => props.theme.primary.color_default};
    margin-bottom: 2em;
    cursor: pointer;

    &:hover{
        background: ${props => props.theme.primary.color_default};
        color: white;
    }

    &::before{
        content: "${props => props.text}";
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;



    }

`