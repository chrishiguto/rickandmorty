import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Container } from 'components/Container'
import * as CharacterCardStyles from 'components/CharacterCard/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.lightBlack};
  `}
`

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  background-image: url('/img/bg.png');
  background-size: cover;
  background-position: center;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
    pointer-events: none;
    background: linear-gradient(180deg, rgba(30, 30, 30, 0) 0%, #1e1e1e 100%);
  }
`

export const Hero = styled.div`
  ${({ theme }) => css`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: calc(${theme.spacings.xxlarge} + ${theme.spacings.xsmall});
  `}
`

type SearchProps = {
  hasFilter: boolean
}

const searchModifiers = {
  hasFilter: () => css`
    grid-template-columns: 16.4rem 8.4rem auto;
  `
}

export const Search = styled.div<SearchProps>`
  ${({ hasFilter }) => css`
    display: flex;
    justify-content: center;

    display: grid;
    grid-gap: 0.8rem;
    width: 100%;
    grid-template-columns: 16.4rem 8.4rem;

    ${media.greaterThan('small')`
      grid-template-columns: 19.6rem 8.4rem;
      grid-gap: 1.6rem;
      ${hasFilter && searchModifiers.hasFilter()};
    `}
  `}
`

export const Clear = styled.div`
  grid-column: 1/3;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.greaterThan('small')`
      margin-top: 0;
      grid-row: 1/2;
      grid-column: 3/4;
    `}
`

export const ClearFilter = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background: none;
    text-decoration: underline;
    color: white;
    font-weight: 700;
    outline: none;
    border: none;

    > span {
      margin-left: ${theme.spacings.xxsmall};
    }
  `}
`

export const Logo = styled.img`
  width: 100%;
  max-width: 50.2rem;
`

export const Section = styled(Container)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${Search} {
      margin-top: calc(${theme.spacings.xxlarge} + ${theme.spacings.xsmall});
    }
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    grid-column: 1/3;
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.red};
    text-align: center;

    ${media.greaterThan('small')`
      text-align: left;
    `}
  `}
`

export const Placeholder = styled.p`
  ${({ theme }) => css`
    line-height: ${theme.font.sizes.medium};
  `}
`

export const Content = styled(Container)`
  display: grid;
  grid-gap: 2.4rem;
  justify-items: center;

  margin-top: 8rem;

  grid-template-columns: repeat(auto-fill, minmax(18.7rem, 1fr));

  ${CharacterCardStyles.Wrapper} {
    ${media.greaterThan('small')`
      ${CharacterCardStyles.wrapperModifiers.small()};
    `}
  }
`

export const PaginationWrapper = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxlarge};
  `}
`
