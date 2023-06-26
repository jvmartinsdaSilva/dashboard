import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 50%;
    overflow: auto;
    padding: .45em;

    &::-webkit-scrollbar {
      width: 10px;
      height: 0px;
    }
    
    &::-webkit-scrollbar-thumb {
      background-color: ${props => props.theme.font.color_light};
    }
`