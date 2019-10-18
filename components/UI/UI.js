import styled, { createGlobalStyle } from 'styled-components';


export const Container = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 15px;
    height: 100%;
    @media(max-width: 1200px) {
        max-width: 950px;
    }

    @media(max-width: 1024px) {
        max-width: 750px;
    }

    @media(max-width: 768px) {
        max-width: 600px;
    }

    @media(max-width: 576px) {
        max-width: 500px;
    }
`
export const GlobalStyle = createGlobalStyle`
  body {
    direction: ${props => props.lang};
    margin: 0;
    font-family:  sans-serif;
    overflow-x: hidden !important;
  }
`

