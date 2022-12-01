import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style-type: none;
        text-align: center;
        font-family: 'Karla', sans-serif;
    }

    :root{
        
    }

    button {
        cursor: pointer;
        border: none;
    }
`;
