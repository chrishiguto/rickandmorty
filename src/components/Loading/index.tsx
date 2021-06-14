import { useEffect } from 'react'
import { config, useTransition } from 'react-spring'
import NProgress from 'nprogress'

import 'nprogress/nprogress.css'
import * as S from './styles'

export type LoadingProps = {
  isLoading: boolean
}

const Loading = ({ isLoading }: LoadingProps) => {
  const transitions = useTransition(isLoading, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.gentle
  })

  useEffect(() => {
    NProgress.configure({ showSpinner: false })
    isLoading && NProgress.start()

    return () => {
      NProgress.done()
    }
  }, [isLoading])

  return transitions(
    (style, item) =>
      item && (
        <S.Wrapper style={style}>
          <S.Container>
            <S.Loading
              src={'/img/loading.png'}
              alt="Rick and morty running image, loading image"
            />
          </S.Container>
          <S.Text>Loading...</S.Text>
        </S.Wrapper>
      )
  )
}

export default Loading
