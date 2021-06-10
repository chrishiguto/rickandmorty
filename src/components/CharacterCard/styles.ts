import styled, { css, DefaultTheme } from 'styled-components'

type WrapperProps = {
  img: string
  isDead: boolean
  size: 'small' | 'large'
  hover: boolean
}

const wrapperModifiers = {
  isDead: () => css`
    filter: grayscale(1);
  `,

  small: () => css`
    height: 18.7rem;
    width: 18.7rem;
    background-position: center -3rem;
  `,

  large: () => css`
    height: 47rem;
    width: 40rem;
    background-position: center -4rem;
  `,

  hover: (theme: DefaultTheme) => css`
    &:hover,
    &:active,
    &:focus-visible {
      border-color: ${theme.colors.yellow};
      box-shadow: 0px 6px 7px ${theme.colors.yellow}25;
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
    border: 0.2rem solid ${theme.colors.gray};
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
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(2.3rem);
  `
}

export const Stripe = styled.div<StripeProps>`
  ${({ theme, transparent }) => css`
    padding: ${theme.spacings.xxsmall} 1.4rem;
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
    font-family: 'Seravek', sans-serif;
    width: 100%;
    text-align: left;

    ${transparent && stripeModifiers.stripe()}
  `}
`

export const Name = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
  `}
`

export const Type = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
  `}
`
