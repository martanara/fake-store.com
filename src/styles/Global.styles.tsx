import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #f2e8cf;
    color: #3E3234;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 600;
    line-height: 1.5;
  }
`

export const theme = {
  colors: {
    white: "#ffff",
    text: "#3E3234",
    moss: "#386641",
    green: "#6a994e",
    lightGreen: "#a7c957",
    wine: "#bc4749",
  }
}