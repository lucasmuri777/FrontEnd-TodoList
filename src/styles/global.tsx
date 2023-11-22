'use client'
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    html,body{
        height: 100%;
    }
    body{
        background-color: #001018;
    }
    h1,p,li,label,h2,h3,h4,a{
        color: #fafafa;
    }
    
`

