import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`


    *,
    *::before,
    *::after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }
    
    body {
        
        font-family: 'Arial', sans-serif;
        font-size: 1rem;
        line-height: 1.4;
        background-color: #f5f5f5;
        color: black;
    }

    a {
        ${'' /* color: red; */}
        text-decoration: none;
    }
    
    ul {
        list-style: none;
    }
    
    img {
        width: 100%;
    }
`;
export default GlobalStyle;