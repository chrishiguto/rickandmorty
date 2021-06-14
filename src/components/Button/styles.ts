import styled, { css } from 'styled-components'

export const Wrapper = styled.button`
  ${({ theme }) => css`
    background: transparent;
    padding: ${theme.spacings.xxsmall} calc(${theme.spacings.xsmall} - 0.2rem);
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    border: 2px solid ${theme.colors.white};
    border-radius: ${theme.border.radius};
    color: ${theme.colors.white};
    outline: none;
    transition: box-shadow, background-color ${theme.transition.default};

    &:hover {
      background-color: ${theme.colors.darkGray}35;
    }

    &:focus-visible {
      box-shadow: 0 0 0 0.3rem ${theme.colors.yellow};
    }
  `}
`
