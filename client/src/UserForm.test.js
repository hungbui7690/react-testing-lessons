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
  // (1)
  const mock = jest.fn()

  // (2) pass here
  render(<UserForm onUserAdd={mock} />)

  const [nameInput, emailInput] = screen.getAllByRole('textbox')

  user.click(nameInput)
  user.keyboard('jane')

  user.click(emailInput)
  user.keyboard('jane@gmail.com')

  const button = screen.getByRole('button')
  user.click(button)

  // (3)
  expect(mock).toHaveBeenCalled()
  expect(mock).toHaveBeenCalledWith({ name: 'jane', email: 'jane@gmail.com' })
})
