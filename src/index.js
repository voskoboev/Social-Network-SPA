import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'normalize.css';
import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
  :root {
    box-sizing: border-box;

    height: 100%;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  body {
    font-family: Helvetica, sans-serif;

    
    height: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  ul li {
    list-style-type: none;
  }

  #root {
    height: 100%;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <>
      <Global />
      <App />
    </>
  </React.StrictMode>,
  document.getElementById('root')
)
