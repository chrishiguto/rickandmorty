import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as CharacterCardStyles from 'components/CharacterCard/styles'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  padding: 15rem 1.2rem 1.6rem 1.2rem;

  ${media.greaterThan('small')`
      padding: 15rem 5.6rem 5.6rem 5.6rem;
    `}

  ${media.greaterThan('medium')`
      padding: 2rem 2rem 2rem 5.6rem;
    `}

    ${media.greaterThan('large')`
      max-width: 130rem;
    `}
`

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: 100%;

    border-radius: calc(${theme.border.radius} * 2);
    border: 0.2rem solid ${theme.colors.lightBlack};
    box-shadow: 0px 4px 80px 0 #000;

    ${media.greaterThan('medium')`
      flex-direction: row;
    `}
  `}
`

export const Close = styled.button`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    margin-top: ${theme.spacings.small};
    margin-left: ${theme.spacings.small};

    background: none;
    border: none;
  `}
`

type StripProps = {
  img: string
}

export const Strip = styled.div<StripProps>`
  ${({ theme, img }) => css`
    position: relative;
    display: flex;
    flex-direction: column;

    background-image: url(${img});
    background-size: cover;
    background-position: center center;

    height: 6rem;
    border-top-left-radius: 1.4rem;
    border-top-right-radius: 1.4rem;

    z-index: ${theme.layers.base};

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.7);
      backdrop-filter: blur(2.8rem);
      border-top-left-radius: 1.4rem;
      border-top-right-radius: 1.4rem;
      z-index: -1;

      ${media.greaterThan('medium')`
        border-top-left-radius: 1.4rem;
        border-bottom-left-radius: 1.4rem;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    `}
    }

    ${CharacterCardStyles.Wrapper} {
      position: absolute;
      top: -170%;
      left: 50%;
      transform: translateX(-50%);
    }

    ${media.greaterThan('medium')`
      flex: 0.8;
      max-width: 39rem;
      height: 100%;
      border-top-left-radius: 1.4rem;
      border-bottom-left-radius: 1.4rem;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;

      ${CharacterCardStyles.Wrapper} {
        position: initial;
        transform: none;
        margin: 8.4rem 5.6rem 5.6rem -5.6rem;
        z-index: ${theme.layers.overlay};
      }
    `}
  `}
`

export const StripContent = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    flex: 1;
    overflow: auto;

    padding: ${theme.spacings.xxlarge} ${theme.spacings.small};
    background-color: rgba(0, 0, 0, 0.98);

    border-bottom-left-radius: 1.4rem;
    border-bottom-right-radius: 1.4rem;

    ${media.greaterThan('medium')`
      gap: 6rem;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-top-right-radius: 1.4rem;
      border-bottom-right-radius: 1.4rem;
      padding: calc(${theme.spacings.xxlarge} + 2rem) calc(${theme.spacings.xxlarge} + 2rem);
    `}
  `}
`

export const Information = styled.div``

export const Text = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.white};
    line-height: 2.2rem;
    margin-top: ${theme.spacings.xsmall};
  `}
`

export const Type = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.darkGray};
    margin-top: ${theme.spacings.xsmall};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.small};
    `}
  `}
`

export const Name = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.white};
    line-height: 1;
    margin: 0.4rem 0 0.6rem 0;

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`

export const Dimension = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.lightGray};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`

export const Residents = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-top: ${theme.spacings.xsmall};
  `}
`

export const Quantity = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.darkGray};
    margin-left: ${theme.spacings.xxsmall};
  `}
`
