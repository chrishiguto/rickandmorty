import styled, { css, DefaultTheme } from 'styled-components'

type WrapperProps = {
  img: string
  isDead: boolean
  size: 'small' | 'medium' | 'large'
  hover: boolean
}

export const wrapperModifiers = {
  isDead: () => css`
    filter: grayscale(1);
  `,

  small: () => css`
    height: 18.7rem;
    width: 18.7rem;
    background-position: center -3rem;
  `,

  medium: () => css`
    height: 22.4rem;
    width: 25.4rem;
    background-position: center -3rem;
  `,

  large: () => css`
    width: 100%;
    height: 80%;
    max-height: 59.8rem;
    max-width: 40rem;
    min-width: 30rem;
    background-position: center -4rem;
  `,

  hover: (theme: DefaultTheme) => css`
    &:hover,
    &:active,
    &:focus-visible {
      box-shadow: 0 0 0 0.3rem ${theme.colors.yellow},
        0 0 0.5rem 0.4rem ${theme.colors.yellow};
      outline: none;
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, img, isDead, size, hover }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow: hidden;

    background-image: url(${img});
    background-size: cover;

    border-radius: ${theme.border.radius};
    box-shadow: 0px 0px 0px 0.2rem ${theme.colors.gray};
    border: 0;
    backdrop-filter: blur(0);
    transition: ${theme.transition.fast};

    ${isDead && wrapperModifiers.isDead()};
    ${!!size && wrapperModifiers[size]()};
    ${hover && wrapperModifiers.hover(theme)};
  `}
`

type StripeProps = {
  transparent: boolean
}

const stripeModifiers = {
  stripe: () => css`
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(2rem);
  `
}

export const Name = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
  `}
`

export const Type = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    line-height: 1;
  `}
`

export const Stripe = styled.div<StripeProps>`
  ${({ theme, transparent }) => css`
    padding: ${theme.spacings.xxsmall} 1.4rem;
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
    width: 100%;
    text-align: left;

    ${transparent && stripeModifiers.stripe()}

    ${Name}, ${Type} {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  `}
`
