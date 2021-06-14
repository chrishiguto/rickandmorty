import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import Pagination from '.'

describe('<Pagination />', () => {
  it('should render the pagination with left and right pages and trigger change function if clicked', async () => {
    const mockFn = jest.fn()

    const { container } = renderWithTheme(
      <Pagination
        pages={10}
        activePage={5}
        next={6}
        prev={4}
        onChange={mockFn}
      />
    )

    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getAllByText('...')).toHaveLength(2)
    expect(screen.getByText('4')).toBeInTheDocument()
    expect(screen.getByText('5')).toBeInTheDocument()
    expect(screen.getByText('6')).toBeInTheDocument()
    expect(screen.getByText('10')).toBeInTheDocument()

    userEvent.click(screen.getByText('4'))
    userEvent.click(screen.getByLabelText(/previous page button/i))
    userEvent.click(screen.getByLabelText(/next page button/i))

    await waitFor(() => {
      expect(mockFn).toBeCalledTimes(3)
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the pagination with left pages and trigger change function if clicked', async () => {
    const mockFn = jest.fn()

    renderWithTheme(
      <Pagination
        pages={10}
        activePage={9}
        next={10}
        prev={8}
        onChange={mockFn}
      />
    )

    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('...')).toBeInTheDocument()
    expect(screen.getByText('8')).toBeInTheDocument()
    expect(screen.getByText('9')).toBeInTheDocument()
    expect(screen.getByText('10')).toBeInTheDocument()

    userEvent.click(screen.getByText('8'))

    await waitFor(() => {
      expect(mockFn).toBeCalledTimes(1)
    })
  })

  it('should render the pagination with right pages and trigger change function if clicked', async () => {
    const mockFn = jest.fn()

    renderWithTheme(
      <Pagination
        pages={10}
        activePage={2}
        next={3}
        prev={1}
        onChange={mockFn}
      />
    )

    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.getByText('...')).toBeInTheDocument()
    expect(screen.getByText('10')).toBeInTheDocument()

    userEvent.click(screen.getByText('3'))

    await waitFor(() => {
      expect(mockFn).toBeCalledTimes(1)
    })
  })

  it('should render the active page', () => {
    renderWithTheme(
      <Pagination
        pages={1}
        activePage={1}
        next={null}
        prev={null}
        onChange={jest.fn}
      />
    )

    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.queryByText('...')).not.toBeInTheDocument()
  })

  it('should render the pagination with left arrow disabled', async () => {
    const mockFn = jest.fn()

    renderWithTheme(
      <Pagination
        pages={2}
        activePage={1}
        next={2}
        prev={null}
        onChange={mockFn}
      />
    )

    const button = screen.getByLabelText(/previous page button/i)

    expect(button).toBeDisabled()

    userEvent.click(button)

    await waitFor(() => {
      expect(mockFn).not.toBeCalled()
    })
  })

  it('should render the pagination with right arrow disabled', async () => {
    const mockFn = jest.fn()

    renderWithTheme(
      <Pagination
        pages={2}
        activePage={2}
        next={null}
        prev={1}
        onChange={mockFn}
      />
    )

    const button = screen.getByLabelText(/next page button/i)

    expect(button).toBeDisabled()

    userEvent.click(button)

    await waitFor(() => {
      expect(mockFn).not.toBeCalled()
    })
  })

  it('should go to first page if clicked', async () => {
    const mockFn = jest.fn()

    renderWithTheme(
      <Pagination
        pages={10}
        activePage={9}
        next={10}
        prev={8}
        onChange={mockFn}
      />
    )

    const button = screen.getByText('1')

    userEvent.click(button)

    await waitFor(() => expect(mockFn).toBeCalledTimes(1))
  })

  it('should go to last page if clicked', async () => {
    const mockFn = jest.fn()

    renderWithTheme(
      <Pagination
        pages={10}
        activePage={5}
        next={6}
        prev={4}
        onChange={mockFn}
      />
    )

    const button = screen.getByText('10')

    userEvent.click(button)

    await waitFor(() => expect(mockFn).toBeCalledTimes(1))
  })
})
