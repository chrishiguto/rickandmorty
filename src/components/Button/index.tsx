import { ButtonHTMLAttributes } from 'react'

import * as S from './styles'

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  children: React.ReactNode
} & ButtonType

const Button = ({ children, ...props }: ButtonProps) => (
  <S.Wrapper {...props}>{children}</S.Wrapper>
)

export default Button
