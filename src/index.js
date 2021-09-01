import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'normalize.css';
import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
  :root {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  body {
    font-family: Arial, sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul li {
    list-style-type: none;
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
