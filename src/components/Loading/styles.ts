import styled, { css } from 'styled-components'
import { animated } from 'react-spring'

export const Wrapper = styled(animated.div)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #1e1e1e60;
    backdrop-filter: blur(4rem);
    z-index: ${theme.layers.alwaysOnTop};
  `}
`

export const Container = styled.div`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
    border: 0.2rem solid ${theme.colors.darkGray};
    height: 18.7rem;
    width: 18.7rem;
    overflow: hidden;
  `}
`

export const Loading = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Text = styled.p`
  ${({ theme }) => css`
    font-size: 2.4rem;
    color: ${theme.colors.white};
    margin-top: ${theme.spacings.medium};
  `}
`
