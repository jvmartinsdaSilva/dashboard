import styled from "styled-components";

export const Container = styled.div`
    display: ${props => props.isLoading ? "flex" : "none"};
    align-items: center;
    justify-content: center;
    margin: 1em auto;
    width: 100px;
    height: 100px;
    


`

export const LoadOutside = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border-top: 2px solid ${props => props.theme.primary.color_bold};
    border-left: 2px solid ${props => props.theme.primary.color_bold};

    animation: spinner 2.5s  cubic-bezier(0.645, 0.045, 0.355, 1) infinite  ;

@keyframes spinner{
    100%{
        transform: rotate(360deg);
    }
}
    
`

export const LoadInside = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70%;
    height: 70%;
    border-radius: 50%;
    border-right: 2px solid ${props => props.theme.primary.color_default};
    border-bottom: 2px solid ${props => props.theme.primary.color_default};
    animation: spinner 2.5s cubic-bezier(.51,.41,.45,.92) infinite;

    @keyframes spinner{
        100%{
            transform: rotate(-360deg);
        }
    }
`