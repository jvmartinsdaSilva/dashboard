import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: .5em;
    width: 100%;
    height: 250px;
    color: ${props => props.theme.font.color_default};
    
    h2{
        margin: 1em 0;
        font-size: 20px;
    }
`

export const UserPhoto = styled.img`
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border: 2px solid ${props => props.theme.font.color_default} ;

`