import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 1px solid ${props => props.theme.font.color_light};
    cursor: pointer;

    svg{
        width: 85%;
        height: 85%;
        fill: ${props => props.theme.font.color_default};
    }
    

`