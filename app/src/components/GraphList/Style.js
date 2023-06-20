import styled from "styled-components";

export const Container = styled.div`
    width: 80%;
    margin: 1em auto;
    padding: .5em;
`

export const List = styled.ul`
    margin: .5em 0;
    height: 200px; 
    overflow: auto;
    color: ${props => props.theme.font.color_default};
    

    &::-webkit-scrollbar {
      width: 3px;
      height: 0px;
    }
    
    &::-webkit-scrollbar-thumb {
      background-color: ${props => props.theme.font.color_light};
      border-radius: 10px;
    }

`

export const Item = styled.li`
    font-size: 16px;
    font-family: monospace;
    margin:  .85em;
    list-style: none;
    cursor: pointer;

    &:hover{
       color: ${props => props.theme.primary.color_default}
    }
`