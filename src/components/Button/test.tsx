import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Button from '.'

describe('<Button />', () => {
  it('should render the button', () => {
    const { container } = renderWithTheme(<Button>Button text</Button>)

    expect(
      screen.getByRole('button', { name: /button text/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
