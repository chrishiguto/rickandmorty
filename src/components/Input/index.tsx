import { InputHTMLAttributes, forwardRef } from 'react'

import * as S from './styles'

export type InputProps = InputHTMLAttributes<HTMLInputElement>

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { ...props },
  ref
) => (
  <S.Wrapper>
    <S.Input ref={ref} {...props} />
  </S.Wrapper>
)

export default forwardRef(Input)
