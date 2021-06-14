import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import Empty from '.'

describe('<Empty />', () => {
  it('should render the empty message without go back button by default', () => {
    const { container } = renderWithTheme(<Empty />)

    expect(screen.getByRole('heading', { name: /oops!/i })).toBeInTheDocument()
    expect(
      screen.getByText(
        /looks like this character doesn't exist... Mhmm, try again!/i
      )
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the empty message with go back button', async () => {
    const mockFn = jest.fn()

    renderWithTheme(<Empty onGoBack={mockFn} />)

    const button = screen.getByRole('button', { name: /Go back/i })

    userEvent.click(button)

    await waitFor(() => {
      expect(mockFn).toBeCalledTimes(1)
    })
  })
})
