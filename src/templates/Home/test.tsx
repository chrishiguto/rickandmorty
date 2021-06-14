import { screen, waitFor } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import { renderWithTheme } from 'utils/tests/helpers'
import userEvent from '@testing-library/user-event'

import { filterMock, mock, noResultsMock } from './mock'
import Home from '.'

describe('<Home />', () => {
  it('should render the home', async () => {
    renderWithTheme(
      <MockedProvider mocks={[mock]} addTypename={false}>
        <Home />
      </MockedProvider>
    )

    expect(screen.getByText(/loading.../i)).toBeInTheDocument()

    expect(await screen.findByText(/aqua morty/i)).toBeInTheDocument()
  })

  it('should render a empty message if there is no results from query', async () => {
    renderWithTheme(
      <MockedProvider mocks={[mock, noResultsMock]} addTypename={false}>
        <Home />
      </MockedProvider>
    )

    expect(await screen.findByText(/aqua morty/i)).toBeInTheDocument()

    userEvent.type(
      screen.getByPlaceholderText(/search characters/i),
      'no filter results'
    )
    userEvent.click(screen.getByRole('button', { name: 'Search' }))

    expect(await screen.findByText(/oops!/i)).toBeInTheDocument()

    userEvent.click(screen.getByRole('button', { name: 'Go back' }))

    expect(await screen.findByText(/aqua morty/i)).toBeInTheDocument()
  })

  it('should filter characters when search is clicked', async () => {
    renderWithTheme(
      <MockedProvider mocks={[mock, filterMock]} addTypename={false}>
        <Home />
      </MockedProvider>
    )

    expect(await screen.findByText(/aqua morty/i)).toBeInTheDocument()

    userEvent.type(screen.getByPlaceholderText(/search characters/i), 'aqua')
    userEvent.click(screen.getByRole('button', { name: 'Search' }))

    expect(await screen.findByText(/filtered aqua morty/i)).toBeInTheDocument()
  })

  it('should trigger handleChange if pagination is clicked', async () => {
    renderWithTheme(
      <MockedProvider mocks={[mock]} addTypename={false}>
        <Home />
      </MockedProvider>
    )
    expect(await screen.findByText(/aqua morty/i)).toBeInTheDocument()

    userEvent.click(await screen.findByText('1'))

    expect(await screen.findByText(/aqua morty/i)).toBeInTheDocument()
  })

  it('should open character card if clicked', async () => {
    renderWithTheme(
      <MockedProvider mocks={[mock]} addTypename={false}>
        <Home />
      </MockedProvider>
    )

    userEvent.click(await screen.findByText(/aqua morty/i))

    expect(screen.getByText(/about/i)).toBeInTheDocument()
  })

  it('should lose character card if close button is clicked', async () => {
    renderWithTheme(
      <MockedProvider mocks={[mock]} addTypename={false}>
        <Home />
      </MockedProvider>
    )

    userEvent.click(await screen.findByText(/aqua morty/i))

    expect(screen.getByText(/about/i)).toBeInTheDocument()

    userEvent.click(screen.getByLabelText(/close character view desktop/i))

    await waitFor(() => {
      expect(screen.queryByText(/about/i)).not.toBeInTheDocument()
    })
  })

  it('should show error message if search is made without text', async () => {
    renderWithTheme(
      <MockedProvider mocks={[mock]} addTypename={false}>
        <Home />
      </MockedProvider>
    )

    userEvent.click(screen.getByRole('button', { name: 'Search' }))

    expect(
      await screen.findByText(/please fill character's name field/i)
    ).toBeInTheDocument()
  })
})
