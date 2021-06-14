import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithTheme } from 'utils/tests/helpers'

import CharacterCard from '.'
import characterCardMock from './mock'

describe('<CharacterCard />', () => {
  it('should render the character card as div by default', () => {
    const { container } = renderWithTheme(
      <CharacterCard {...characterCardMock} />
    )

    expect(
      screen.getByRole('heading', { name: /rick sanchez/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/human/i)).toBeInTheDocument()

    expect(screen.getByLabelText(/rick sanchez card/i)).toHaveStyleRule(
      'background-image',
      `url(${characterCardMock.image})`
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the character card as button', async () => {
    const mockFn = jest.fn()

    renderWithTheme(
      <CharacterCard {...characterCardMock} as="button" onClick={mockFn} />
    )

    const card = screen.getByRole('button', { name: /rick sanchez card/i })

    expect(card).toBeInTheDocument()

    userEvent.click(card)

    await waitFor(() => {
      expect(mockFn).toBeCalledTimes(1)
    })
  })

  it('should render a grayscale character card if isDead prop is true', () => {
    renderWithTheme(<CharacterCard {...characterCardMock} as="button" isDead />)

    expect(screen.getByLabelText(/rick sanchez card/i)).toHaveStyleRule(
      'filter',
      'grayscale(1)'
    )
  })

  it('should render a black stripe if transparenStripe characterCardMock is false', () => {
    renderWithTheme(
      <CharacterCard
        {...characterCardMock}
        as="button"
        transparentStripe={false}
      />
    )

    expect(
      screen.getByLabelText(/rick sanchez's stripe with information/i)
    ).toHaveStyle({ 'background-color': '#1B1B1B' })
  })

  it('should render a medium character card', () => {
    renderWithTheme(
      <CharacterCard {...characterCardMock} as="button" size="medium" />
    )

    expect(screen.getByLabelText(/rick sanchez card/i)).toHaveStyle({
      width: '25.4rem',
      height: '22.4rem',
      'background-position': 'background-position'
    })
  })

  it('should render a large character card', () => {
    renderWithTheme(
      <CharacterCard {...characterCardMock} as="button" size="large" />
    )

    expect(screen.getByLabelText(/rick sanchez card/i)).toHaveStyle({
      width: '100%',
      height: '80%',
      'max-height': '59.8rem',
      'max-width': '40rem',
      'min-width': '30rem'
    })
  })

  it('should render box shadow if hover prop is true', async () => {
    renderWithTheme(<CharacterCard {...characterCardMock} as="button" hover />)

    const card = screen.getByLabelText(/rick sanchez card/i)

    expect(card).toHaveStyleRule(
      'box-shadow',
      '0 0 0 0.3rem #cbd736,0 0 0.5rem 0.4rem #cbd736',
      {
        modifier: ':hover'
      }
    )
  })
})
