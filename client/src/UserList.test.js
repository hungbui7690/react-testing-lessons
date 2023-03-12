// (***) import {within}
import { render, screen, within } from '@testing-library/react'
import UserList from './UserList'

test('render 1 row per user', () => {
  const users = [
    { name: 'jane', email: 'jane@gmail.com' },
    { name: 'sam', email: 'sam@gmail.com' },
  ]
  render(<UserList users={users} />)

  // (***) fallback #1: use data-testid > this one is not good, since we have to modify react code
  const rows = within(screen.getByTestId('user')).getAllByRole('row')

  expect(rows).toHaveLength(2)
})

test('render the email and name for each user', () => {})
