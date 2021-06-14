import styled, { css, DefaultTheme } from 'styled-components'

type WrapperProps = {
  size: 'small' | 'medium' | 'large'
}

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxlarge};
  `,

  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
  `
}

export const Wrapper = styled.h2<WrapperProps>`
  ${({ theme, size }) => css`
    color: ${theme.colors.yellow};
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.8rem;

    ${!!size && wrapperModifiers[size](theme)};
  `}
`
