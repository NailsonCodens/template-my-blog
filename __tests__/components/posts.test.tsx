import { render, screen } from '@testing-library/react'
import Posts from 'components/Posts'

describe('Posts component', () => {
  test('Show the empty component', () => {
    render(<Posts posts={[]} />)
  })

  test('Show the filled component', async () => {
    render(
      <Posts
        posts={[
          {
            title: 'Tudo o que você precisa saber sobre React JS',
            detailtitle: '2023',
            image: 'Link de imagem',
            content: 'Conteúdo'
          }
        ]}
      />
    )
  })

  test('Show div element when posts are empty', () => {
    // eslint-disable-next-line no-empty-pattern
    const {} = render(<Posts posts={[]} />)
    const emptydiv = screen.getByText(/deserto/)
    expect(emptydiv).toHaveClass('emptydiv')
  })
})
