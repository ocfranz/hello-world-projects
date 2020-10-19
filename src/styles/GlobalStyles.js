import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body, html{
        margin :0px;
        padding: 0px;
        height: 100%;
        width: 100%;
    }

    body{
        background-color : #01050C;
    }
    *{
        color : #ffffff;
        font-family: 'Baloo Bhaina 2', cursive;
    } 
    #root{
        height: 100%;
        width: 100%;
    }
`;
export default GlobalStyles;
