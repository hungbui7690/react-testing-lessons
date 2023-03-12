import { render, screen, within } from '@testing-library/react'
import UserList from './UserList'

function renderComponent() {
  const users = [
    { name: 'jane', email: 'jane@gmail.com' },
    { name: 'sam', email: 'sam@gmail.com' },
  ]
  render(<UserList users={users} />)

  return {
    users,
  }
}

// (***) in jest and many frameworks, we have this function > this function will run before every test > good for initial setup > but in react-testing-lib: if we throw the render() in, we will get warning > don't use that though it is ok
beforeEach(() => {
  // render(<UserList />)
})

test('render 1 row per user', () => {
  renderComponent()

  const rows = within(screen.getByTestId('users')).getAllByRole('row')

  expect(rows).toHaveLength(2)
})

test('render the email and name for each user', () => {
  const { users } = renderComponent()

  for (let user of users) {
    const name = screen.getByRole('cell', { name: user.name })
    const email = screen.getByRole('cell', { name: user.email })

    expect(name).toBeInTheDocument()
    expect(email).toBeInTheDocument()
  }
})
