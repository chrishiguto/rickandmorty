import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
`

export const Pages = styled.ul`
  display: inline-flex;
  align-items: center;
  gap: 2.4rem;
  margin-right: 4.8rem;
  margin-left: 4.8rem;
  list-style: none;
`

const Button = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    outline: none;
    border: none;
    background: none;

    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.lightGray};
    line-height: 1;
    height: 3.2rem;
    width: 3.2rem;
    transition: ${theme.transition.fast};
    border-radius: 50%;

    &:not(:disabled):hover {
      background: ${theme.colors.gray};
    }
  `}
`

const pageButtonModifiers = {
  active: (theme: DefaultTheme) => css`
    color: ${theme.colors.yellow};
  `
}

export const PageButton = styled(Button)``

type PageProps = {
  isActive?: boolean
}

export const Page = styled.li<PageProps>`
  ${({ theme, isActive }) => css`
    display: ${isActive ? 'block' : 'none'};

    ${media.greaterThan('medium')`
      display: block;
    `}

    ${PageButton} {
      ${!!isActive && pageButtonModifiers.active(theme)};
    }
  `}
`

export const PageInterval = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.lightGray};
    line-height: 1;
    height: 3.2rem;
    width: 3.2rem;
    border-radius: 50%;
  `}
`

const arrowButtonModifiers = {
  disabled: (theme: DefaultTheme) => css`
    cursor: not-allowed;

    > svg {
      color: ${theme.colors.gray};
    }
  `
}

export const ArrowButton = styled(Button)`
  ${({ theme, disabled }) => css`
    > svg {
      color: ${theme.colors.white};
    }

    ${disabled && arrowButtonModifiers.disabled(theme)}
  `}
`
