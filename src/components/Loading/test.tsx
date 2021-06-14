import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Loading from '.'

describe('<Loading />', () => {
  it('should render the loading', () => {
    renderWithTheme(<Loading isLoading />)

    expect(
      screen.getByRole('img', {
        name: /rick and morty running image, loading image/i
      })
    ).toHaveAttribute('src', '/img/loading.png')

    expect(screen.getByText(/loading.../i)).toBeInTheDocument()
  })
})
