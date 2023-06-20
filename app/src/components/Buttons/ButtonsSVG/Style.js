import styled from "styled-components";

export const BtnSvg = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: none;
    cursor: pointer;
    border: none;

    svg{
        width: 100%;
        height: 100%;
        fill: ${props => props.theme.font.color_default};

        &:hover{
            fill: ${props => props.theme.primary.color_default}
        }
    }
    
`