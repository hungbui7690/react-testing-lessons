import { render, screen, within } from '@testing-library/react'
import UserList from './UserList'

test('render 1 row per user', () => {
  const users = [
    { name: 'jane', email: 'jane@gmail.com' },
    { name: 'sam', email: 'sam@gmail.com' },
  ]

  render(<UserList users={users} />)

  const rows = within(screen.getByTestId('users')).getAllByRole('row')

  expect(rows).toHaveLength(2)
})

// (***)
test('render the email and name for each user', () => {
  const users = [
    { name: 'jane', email: 'jane@gmail.com' },
    { name: 'sam', email: 'sam@gmail.com' },
  ]

  render(<UserList users={users} />)

  // (***) check playground to find the role
  for (let user of users) {
    const name = screen.getByRole('cell', { name: user.name })
    const email = screen.getByRole('cell', { name: user.email })

    expect(name).toBeInTheDocument()
    expect(email).toBeInTheDocument()
  }
})
