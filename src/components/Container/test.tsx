import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'
import { Container } from '.'

describe('<Container />', () => {
  it('should render the container', () => {
    const { container } = renderWithTheme(
      <Container>
        <span>Won Games</span>
      </Container>
    )

    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      theme.grid.container
    )

    expect(container.firstChild).toMatchInlineSnapshot(`
.c0 {
  width: 100%;
  max-width: 90rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 3.2rem;
  padding-right: 3.2rem;
}

<div
  class="c0"
>
  <span>
    Won Games
  </span>
</div>
`)
  })
})
