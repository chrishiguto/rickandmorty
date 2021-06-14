import { useEffect, useRef } from 'react'
import { config, useTransition } from 'react-spring'

import * as S from './styles'

export type ModalProps = {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
}

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  const transitions = useTransition(isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.gentle
  })

  const innerTransitions = useTransition(isOpen, {
    from: { opacity: 0, transform: 'translateY(-20px)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateY(-20px)' },
    config: config.gentle
  })

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === 'Escape' && onClose()
    }

    ref.current?.focus()

    window.addEventListener('keyup', handleKeyUp)
    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [onClose])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return transitions(
    (style, item) =>
      item && (
        <S.Wrapper
          style={style}
          role="presentation"
          tabIndex={-1}
          ref={ref}
          aria-label="modal"
          aria-hidden={!isOpen}
        >
          {innerTransitions(
            (style, item) =>
              item && <S.Content style={style}>{children}</S.Content>
          )}
        </S.Wrapper>
      )
  )
}

export default Modal
