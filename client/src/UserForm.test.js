import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import UserForm from './UserForm'

test('it shows 2 inputs and 1 button', () => {
  render(<UserForm />)

  const inputs = screen.getAllByRole('textbox')
  const button = screen.getByRole('button')

  expect(inputs).toHaveLength(2)
  expect(button).toBeInTheDocument()
})

test('it calls onUserAdd when the form is submitted', () => {
  // NOT THE BEST IMPLEMENTATION

  // (1)
  const argList = []
  const callback = (...args) => {
    argList.push(args)
  }

  // (2) pass callback > ref only
  render(<UserForm onUserAdd={callback} />)

  const [nameInput, emailInput] = screen.getAllByRole('textbox')

  user.click(nameInput)
  user.keyboard('jane')

  user.click(emailInput)
  user.keyboard('jane@gmail.com')

  const button = screen.getByRole('button')

  user.click(button)

  // (3) assertion to making 'onUserAdd' gets called with email/name
  expect(argList).toHaveLength(1)
  expect(argList[0][0]).toEqual({ name: 'jane', email: 'jane@gmail.com' })
})
