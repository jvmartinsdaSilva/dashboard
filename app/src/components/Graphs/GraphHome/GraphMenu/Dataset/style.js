import styled from "styled-components";

export const Conatiner = styled.div`
    display: flex;
    flex-direction: column;
    padding: .5em;
    margin: .5em;
    color: ${props => props.color};
    font-size: 20px;
    border: 1px solid ${props => props.color};
    border-radius: 10px;
    height: 3500px;
`