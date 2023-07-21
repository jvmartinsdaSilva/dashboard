import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: .5em;
    width: 100%;
    height: 250px;
    color: ${props => props.theme.font.color_default};
    
    h2{
        margin: 1em 0;
        font-size: 20px;
    }
`

export const UserPhoto = styled.div`
        width: 150px;
        height: 150px;
        border-radius: 50%;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url(${props => props.image});
        pointer-events: none;

`

export const UserName = styled.span`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 1em;
    padding: .25em;
    padding-left: 26%;
    width: 100%;
    font-size: 15px;
    font-weight: bolder;
`