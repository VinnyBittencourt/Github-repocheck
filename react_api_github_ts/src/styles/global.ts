import { createGlobalStyle } from 'styled-components';
import githubbackground from '../assets/logogit2.png';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    body{
        background: linear-gradient(rgba(237,237,237,0.75) 10%, rgba(237,237,237,1) 100%), url(${githubbackground}) 90% 20%;
        /* background-size: */
        background-repeat: no-repeat;
        /* background-position: right top; */
        height: 100vh;
        -webkit-font-smoothing: antialiased;
    }

    border-style, input, button{
        font: 16px 'Roboto', sans-serif;
    }

    #root{
        max-width: 960px;
        margin: 0 auto;
        padding: 40px 20px;
    }

    button{
        cursor: pointer;
    }

    .compass{
        width: 50px;
    }

    .compass__container{
        display: flex;
        align-items: center;
    }

    .compass__container h2{
        font-weight: 300;
        margin-left: 10px;
    }

    .compass__container h2 span{
        font-weight: 400;
    }
`;
