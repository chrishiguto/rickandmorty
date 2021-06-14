import { fireEvent, screen, waitFor } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Modal from '.'

describe('<Modal />', () => {
  it('should render the modal', () => {
    renderWithTheme(
      <Modal isOpen onClose={jest.fn}>
        Modal content
      </Modal>
    )

    expect(screen.getByText(/modal content/i)).toBeInTheDocument()
  })

  it('should not render the modal', () => {
    renderWithTheme(
      <Modal isOpen={false} onClose={jest.fn}>
        Modal content
      </Modal>
    )

    expect(screen.queryByText(/modal content/i)).not.toBeInTheDocument()
  })

  it('should close modal on ESC key press', async () => {
    const mockFn = jest.fn()

    const { container } = renderWithTheme(
      <Modal isOpen={true} onClose={mockFn}>
        Modal content
      </Modal>
    )

    expect(screen.getByText(/modal content/i)).toBeInTheDocument()

    fireEvent.keyUp(container, { key: 'Escape' })

    await waitFor(() => {
      expect(mockFn).toBeCalledTimes(1)
    })
  })
})
