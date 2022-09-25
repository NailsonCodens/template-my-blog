import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Menu from 'components/Menu'
import '@testing-library/jest-dom'

describe('Menu Component', () => {
  test('click link blog element menu', async () => {
    const user = userEvent.setup()
    render(<Menu />)
    await user.click(screen.getByText(/Blog/i))
  })

  test('click link novidades element menu', async () => {
    const user = userEvent.setup()
    render(<Menu />)
    await user.click(screen.getByText(/Novidades/i))
  })
})
