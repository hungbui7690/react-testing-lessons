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

// (***)
test('it calls onUserAdd when the form is submitted', () => {
  // NOT THE BEST IMPLEMENTATION
  // render
  render(<UserForm />)

  // find the 2 inputs
  const [nameInput, emailInput] = screen.getAllByRole('textbox')

  // sim typing in a name
  user.click(nameInput)
  user.keyboard('jane')

  // sim typing in an email
  user.click(emailInput)
  user.keyboard('jane@gmail.com')

  // (***) CONT IN NEXT LESSON
  // find the button
  // sim clicking button
  // assertion to making 'onUserAdd' gets called with email/name
})
