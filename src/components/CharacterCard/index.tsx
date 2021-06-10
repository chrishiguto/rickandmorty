import { ButtonHTMLAttributes, HTMLAttributes } from 'react'
import * as S from './styles'

type CharacterCardTypes =
  | ButtonHTMLAttributes<HTMLButtonElement>
  | HTMLAttributes<HTMLDivElement>

export type CharacterCardProps = {
  img: string
  charName: string
  charType: string
  transparentStripe?: boolean
  isDead?: boolean
  size?: 'small' | 'large'
  hover?: boolean
  as?: React.ElementType
} & CharacterCardTypes

const CharacterCard = ({
  img,
  charName,
  charType,
  transparentStripe = true,
  isDead = false,
  size = 'small',
  hover = false,
  ...props
}: CharacterCardProps) => (
  <S.Wrapper
    hover={hover}
    size={size}
    img={img}
    isDead={isDead}
    {...props}
    aria-label={`${charName} card`}
  >
    <S.Stripe
      transparent={transparentStripe}
      aria-label={`${charName}'s stripe with informations`}
    >
      <S.Name>{charName}</S.Name>
      <S.Type>{charType}</S.Type>
    </S.Stripe>
  </S.Wrapper>
)

export default CharacterCard
