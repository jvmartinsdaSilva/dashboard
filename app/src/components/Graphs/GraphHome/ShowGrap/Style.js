import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 50%;
    border-bottom: 1px solid ${props => props.theme.font.color_light};
`

export const Header = styled.header`
    width: 100%;
    height: 40px;
    padding: .5em 1.25em;
    text-align: start;
`

export const Title = styled.h2`
    font-size: 22px;
    color: ${props => props.theme.font.color_default};
    font-weight: bolder;
`

export const Description = styled.p`
    margin: .25em 0;
    font-size: 14px;
    color: ${props => props.theme.font.color_light};
`