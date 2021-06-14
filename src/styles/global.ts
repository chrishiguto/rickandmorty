import { createGlobalStyle, css } from 'styled-components'
import media from 'styled-media-query'

const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      &::before,
      &::after {
        box-sizing: inherit;
      }
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
      background-color: transparent !important;
      -webkit-text-fill-color: #fff;
      transition: background-color 5000s ease-in-out 0s;
    }

    ${media.greaterThan('medium')`
      &::-webkit-scrollbar {
        width: 0.8rem;
      }

      &::-webkit-scrollbar-track {
        background: ${theme.colors.lightBlack};
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 1.4rem;
        background: ${theme.colors.gray};

        &:hover {
          background: ${theme.colors.gray};
        }
      }
    `}

    #nprogress .bar {
      background-color: ${theme.colors.yellow};
    }

    button {
      cursor: pointer;
    }

    html {
      font-size: 62.5%;
    }

    input,
    button,
    body {
      font-family: ${theme.font.family};
    }
  `}
`

export default GlobalStyles
