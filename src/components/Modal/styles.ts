import styled from 'styled-components'
import { animated } from 'react-spring'
import media from 'styled-media-query'

export const Wrapper = styled(animated.div)`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
`

export const Content = styled(animated.div)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  ${media.greaterThan('medium')`
      width: 80%;
      height: 90%;
    `};
`
