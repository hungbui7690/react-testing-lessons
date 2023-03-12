// (***) import {within}
import { render, screen, within } from '@testing-library/react'
import UserList from './UserList'

test('render 1 row per user', () => {
  const users = [
    { name: 'jane', email: 'jane@gmail.com' },
    { name: 'sam', email: 'sam@gmail.com' },
  ]

  // (1) save in container
  const { container } = render(<UserList users={users} />)

  // (2)
  // const table = container.querySelector('table')
  // console.log(table)

  // (3)
  // eslint-disable-next-line
  const rows = container.querySelectorAll('tbody tr')

  expect(rows).toHaveLength(2)
})

test('render the email and name for each user', () => {})
