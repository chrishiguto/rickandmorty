import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CharacterView from '.'
import characterViewMock from './mock'

jest.mock('components/CharacterCard', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Character Card">{children}</div>
  }
}))

describe('<CharacterView />', () => {
  it('should render the character view', () => {
    const { container } = renderWithTheme(
      <CharacterView
        {...characterViewMock}
        onClose={jest.fn}
        status="Alive"
        gender="Male"
      />
    )

    expect(screen.getAllByTestId(/mock character card/i)).toHaveLength(2)
    expect(
      screen.getByLabelText(/background with blurred image of rick sanchez/i)
    ).toHaveStyleRule('background-image', `url(${characterViewMock.image})`)
    expect(screen.getByRole('heading', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /origin/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /location/i })
    ).toBeInTheDocument()

    expect(screen.getByText(characterViewMock.about)).toBeInTheDocument()

    expect(screen.getByText(characterViewMock.origin.type)).toBeInTheDocument()
    expect(screen.getByText(characterViewMock.origin.name)).toBeInTheDocument()
    expect(
      screen.getByText(characterViewMock.origin.dimension)
    ).toBeInTheDocument()

    expect(
      screen.getByText(characterViewMock.location.type)
    ).toBeInTheDocument()
    expect(
      screen.getByText(characterViewMock.location.name)
    ).toBeInTheDocument()
    expect(
      screen.getByText(characterViewMock.location.dimension)
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render unknown type/dimension/planet if there is not results', () => {
    renderWithTheme(
      <CharacterView
        {...characterViewMock}
        onClose={jest.fn}
        status="Alive"
        gender="Male"
        location={null}
        origin={null}
      />
    )

    expect(screen.getAllByText(/unknown planet/i)).toHaveLength(2)
    expect(screen.getAllByText(/unknown dimension/i)).toHaveLength(2)
    expect(screen.getAllByText(/unknown/i)).toHaveLength(7)
  })

  it('should render a female about text', () => {
    renderWithTheme(
      <CharacterView
        {...characterViewMock}
        onClose={jest.fn}
        status="Alive"
        gender="Female"
      />
    )

    expect(screen.getByText(/female/i)).toBeInTheDocument()
    expect(screen.getByText(/she is/i)).toBeInTheDocument()
  })

  it('should render a genderless about text', () => {
    renderWithTheme(
      <CharacterView
        {...characterViewMock}
        onClose={jest.fn}
        status="Alive"
        gender="Genderless"
      />
    )

    expect(screen.getByText(/genderless/i)).toBeInTheDocument()
    expect(screen.getByText(/they are/i)).toBeInTheDocument()
  })

  it('should render a unknown gender about text', () => {
    renderWithTheme(
      <CharacterView
        {...characterViewMock}
        onClose={jest.fn}
        status="Alive"
        gender="unknown"
      />
    )

    expect(screen.getByText(/unknown/i)).toBeInTheDocument()
    expect(screen.getByText(/they are/i)).toBeInTheDocument()
  })

  it('should render a dead verb about text', () => {
    renderWithTheme(
      <CharacterView
        {...characterViewMock}
        onClose={jest.fn}
        status="Dead"
        gender="Male"
      />
    )

    expect(screen.getByText(/dead/i)).toBeInTheDocument()
    expect(screen.getByText(/was a/i)).toBeInTheDocument()
  })

  it('should render a unknown verb about text', () => {
    renderWithTheme(
      <CharacterView
        {...characterViewMock}
        onClose={jest.fn}
        status="unknown"
        gender="Male"
      />
    )

    expect(screen.getByText(/is a/i)).toBeInTheDocument()
    expect(
      screen.getByText(/it can't be told if he is alive or dead/i)
    ).toBeInTheDocument()
  })
})
