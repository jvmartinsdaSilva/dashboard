import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 50%;
    font-size: 18px;
`

export const SelectContainer = styled.select`
    width: 150px;
    padding: .25em;
    background: ${props => props.theme.bgColors.bgColor1};
    color: ${props => props.theme.font.color_light};
    font-size: 16px;


    &:focus-within{
        outline: none;
    }
`

export const Option = styled.option`
    padding: .25em;
    background: inherit;
    color: ${props => props.theme.font.color_light};
    font-size: 16px; 
`