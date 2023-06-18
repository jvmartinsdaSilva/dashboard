import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    width: 100%;
    margin: .25em 0;
    text-align: center;
    color: ${props => props.theme.font.color_default};
`

export const Message = ({text}) => {
    return(
        <Container>
            <p>{text}</p>
        </Container>
    )
}