import { render, screen } from '@testing-library/react'
import UserList from './UserList'

test('render 1 row per user', () => {
  const users = [
    { name: 'jane', email: 'jane@gmail.com' },
    { name: 'sam', email: 'sam@gmail.com' },
  ]
  render(<UserList users={users} />)

  // (1)
  const rows = screen.getAllByRole('row')

  // (2) Assertion: correct number of rows in the table > failed: because it contains the header
  expect(rows).toHaveLength(2)
})

test('render the email and name for each user', () => {})
