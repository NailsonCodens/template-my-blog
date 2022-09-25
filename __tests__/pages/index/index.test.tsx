import { render } from '@testing-library/react'
import Home from 'pages/index'

describe('Home', () => {
  it('renders a Home', () => {
    // eslint-disable-next-line no-empty-pattern
    const {} = render(<Home />)

    /* const heading = screen.getByText(/você/)
    expect(heading).toBeInTheDocument() */
    // expect(container).toMatchSnapshot()
  })
})
