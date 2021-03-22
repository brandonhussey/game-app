import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-family: 'Montserrat', sans-serif;
    width:100%;
    background: #141414;
}
h2 {
    font-size: 3rem;
    font-family:'Abril FatFace', cursive;
    font-weight: lighter;
    color: #c5c5c5;
}
h3 {
    font-size:1.3rem;
    color: #c5c5c5;
    padding: 1.5rem 0rem;
}
p {
    font-size:1.2rem;
    line-height:200%;
    color: #c5c5c5;
}
a {
    text-decoration: none;
    color: #c5c5c5;
}
img {
    display: block;
}
`;

export default GlobalStyles;
