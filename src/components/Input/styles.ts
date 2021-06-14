import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: transparent;
    outline: none;
    border: 2px solid ${theme.colors.white};
    border-radius: ${theme.border.radius};
    transition: box-shadow ${theme.transition.default};

    &:focus-within {
      box-shadow: 0 0 0 0.3rem ${theme.colors.yellow};
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    border: none;
    outline: none;
    background: transparent;

    width: 100%;
    padding: ${theme.spacings.xxsmall} calc(${theme.spacings.xsmall} - 0.2rem);
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};

    &&::placeholder {
      color: ${theme.colors.lightGray};
    }
  `}
`
