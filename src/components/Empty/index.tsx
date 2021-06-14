import Button from 'components/Button'

import * as S from './styles'

export type EmptyProps = {
  onGoBack?: () => void
}

const Empty = ({ onGoBack }: EmptyProps) => (
  <S.Wrapper>
    <S.Title>Oops!</S.Title>
    <S.Description>
      {`Looks like this character doesn't exist... Mhmm, try again!`}
    </S.Description>
    {!!onGoBack && <Button onClick={onGoBack}>Go back</Button>}
    <S.NotFound src={'/img/404.png'} />
  </S.Wrapper>
)

export default Empty
