import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    text-align:center;
    box-sizing: border-box;
    margin:auto;
    margin-bottom:5%;
    font-family: cursive;
    color:white;
    background-color: rgb(46, 32, 31);
  }
  li {
    list-style:none;
  }
  ul {
    padding:0;
  }
  body {
    margin: 0;
    font-family: system-ui;
  }
  .nextPrev {
    word-spacing: 2rem;
  }
`;
