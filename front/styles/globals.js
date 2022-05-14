import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Montserrat", sans-serif;
    }
    html, body{
        background-color: ${({ theme }) => theme.background.primary};
        color: ${({ theme }) => theme.fontColor.basic};
        transition: background-color 0.3s ease-in-out;
    }
    a {
        color: inherit;
        text-decoration: none;
    }

`;

export default GlobalStyle;
