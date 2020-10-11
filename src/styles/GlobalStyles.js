import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body, html{
        margin :0px;
        padding: 0px;
        height: 100%;
        width: 100%;
    }

    body{
        background-color : #222433;
    }
    *{
        color : #ffffff;
        font-family: 'Inter', sans-serif;
    } 
    #root{
        height: 100%;
        width: 100%;
    }
`;
export default GlobalStyles;
