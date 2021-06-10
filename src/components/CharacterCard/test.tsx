import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithTheme } from 'utils/tests/helpers'

import CharacterCard from '.'

const props = {
  img: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  charName: 'Rick Sanchez',
  charType: 'Human'
}

describe('<CharacterCard />', () => {
  it('should render the character card as div by default', () => {
    const { container } = renderWithTheme(<CharacterCard {...props} />)

    expect(
      screen.getByRole('heading', { name: /rick sanchez/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/human/i)).toBeInTheDocument()

    expect(screen.getByLabelText(/rick sanchez card/i)).toHaveStyleRule(
      'background-image',
      `url(${props.img})`
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the character card as button', async () => {
    const mockFn = jest.fn()

    renderWithTheme(<CharacterCard {...props} as="button" onClick={mockFn} />)

    const card = screen.getByRole('button', { name: /rick sanchez card/i })

    expect(card).toBeInTheDocument()

    userEvent.click(card)

    await waitFor(() => {
      expect(mockFn).toBeCalledTimes(1)
    })
  })

  it('should render a grayscale character card if isDead prop is true', () => {
    renderWithTheme(<CharacterCard {...props} as="button" isDead />)

    expect(screen.getByLabelText(/rick sanchez card/i)).toHaveStyleRule(
      'filter',
      'grayscale(1)'
    )
  })

  it('should render a black stripe if transparenStripe props is false', () => {
    renderWithTheme(
      <CharacterCard {...props} as="button" transparentStripe={false} />
    )

    expect(
      screen.getByLabelText(/rick sanchez's stripe with information/i)
    ).toHaveStyle({ 'background-color': '#1B1B1B' })
  })

  it('should render a large character card', () => {
    renderWithTheme(<CharacterCard {...props} as="button" size="large" />)

    expect(screen.getByLabelText(/rick sanchez card/i)).toHaveStyle({
      height: '47rem',
      width: '40rem'
    })
  })

  it('should render a yellow border and box shadow if hover prop is true', async () => {
    renderWithTheme(<CharacterCard {...props} as="button" hover />)

    const card = screen.getByLabelText(/rick sanchez card/i)

    expect(card).toHaveStyleRule('border-color', '#cbd736', {
      modifier: ':hover'
    })
  })
})
