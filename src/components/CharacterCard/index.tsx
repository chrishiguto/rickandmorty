import { ButtonHTMLAttributes, HTMLAttributes } from 'react'

import { CharacterProps } from 'pages'

import * as S from './styles'

type CharacterCardTypes =
  | ButtonHTMLAttributes<HTMLButtonElement>
  | HTMLAttributes<HTMLDivElement>

export type CharacterCardProps = {
  transparentStripe?: boolean
  isDead?: boolean
  size?: 'small' | 'medium' | 'large'
  hover?: boolean
  as?: React.ElementType
} & CharacterCardTypes &
  Pick<CharacterProps, 'image' | 'name' | 'species'>

const CharacterCard = ({
  image,
  name,
  species,
  transparentStripe = true,
  isDead = false,
  size = 'small',
  hover = false,
  ...props
}: CharacterCardProps) => (
  <S.Wrapper
    hover={hover}
    size={size}
    img={image}
    isDead={isDead}
    {...props}
    aria-label={`${name} card`}
  >
    <S.Stripe
      transparent={transparentStripe}
      aria-label={`${name}'s stripe with informations`}
    >
      <S.Name>{name}</S.Name>
      <S.Type>{species}</S.Type>
    </S.Stripe>
  </S.Wrapper>
)

export default CharacterCard
