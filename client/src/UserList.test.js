import { render, screen } from '@testing-library/react'
import UserList from './UserList'

test('render 1 row per user', () => {
  // (1)
  const users = [
    { name: 'jane', email: 'jane@gmail.com' },
    { name: 'sam', email: 'sam@gmail.com' },
  ]
  // (2) pass users
  render(<UserList users={users} />)

  // (3) we don't know the functions to get all rows
  screen.logTestingPlaygroundURL()
})

test('render the email and name for each user', () => {})
