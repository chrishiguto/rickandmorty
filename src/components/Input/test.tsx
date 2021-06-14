import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Input from '.'

describe('<Input />', () => {
  it('should render the input', () => {
    const { container } = renderWithTheme(
      <Input placeholder="Input placeholder" />
    )

    expect(
      screen.getByPlaceholderText(/input placeholder/i)
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
