import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    text-decoration: none;
    line-height: calc(0.25rem + 1em + 0.25rem);
  }

  html {
    /* 1rem = 16px (User Agent) = 100% (User Agent) */
    font-size: 62.5%; /* 10px */
  }

  body {
    height: 100vh;
    background: ${({ theme }) => theme.colors['--background']};
    color: ${({ theme }) => theme.colors['--text']};
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font-family: ${({ theme }) => theme.fonts.regular};
    font-weight: 400;
    font-size: ${({ theme }) => theme.textSizes['--text-regular-M']}
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  input[type="number"] {
    -moz-appearance: textfield;
  }
  
  ::-webkit-scrollbar {
    width: 0.4rem;
  }
  
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors['--button']}
  }
  
  ::-webkit-scrollbar-thumb {
    border-radius: 2rem;
    background: ${({ theme }) => theme.colors['--purple']}
  }
`
