import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium};
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${theme.colors.white};
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    margin-top: ${theme.spacings.medium};
    margin-bottom: ${theme.spacings.small};
  `}
`

export const NotFound = styled.img`
  ${({ theme }) => css`
    width: 100%;
    max-width: 50rem;
    margin-top: ${theme.spacings.medium};
  `}
`
