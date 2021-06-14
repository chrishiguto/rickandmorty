import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a small heading by default', () => {
    const { container } = renderWithTheme(<Heading>Heading text</Heading>)

    expect(screen.getByRole('heading', { name: /heading text/i })).toHaveStyle({
      'font-size': '1.4rem'
    })

    expect(container.firstChild).toMatchInlineSnapshot(`
.c0 {
  color: #cbd736;
  font-weight: 400;
  text-transform: uppercase;
  -webkit-letter-spacing: 0.8rem;
  -moz-letter-spacing: 0.8rem;
  -ms-letter-spacing: 0.8rem;
  letter-spacing: 0.8rem;
  font-size: 1.4rem;
}

<h2
  class="c0"
>
  Heading text
</h2>
`)
  })

  it('should render a medium heading', () => {
    renderWithTheme(<Heading size="medium">Heading text</Heading>)

    expect(screen.getByRole('heading', { name: /heading text/i })).toHaveStyle({
      'font-size': '2.8rem'
    })
  })

  it('should render a large heading', () => {
    renderWithTheme(<Heading size="large">Heading text</Heading>)

    expect(screen.getByRole('heading', { name: /heading text/i })).toHaveStyle({
      'font-size': '5.2rem'
    })
  })
})
