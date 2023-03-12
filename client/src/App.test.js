import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import App from './App'

test('can receive a new user and show it on a list', () => {
  render(<App />)

  const nameInput = screen.getByRole('textbox', { name: /name/i })
  const emailInput = screen.getByRole('textbox', { name: /email/i })

  const button = screen.getByRole('button')

  user.click(nameInput)
  user.keyboard('jane')
  user.click(emailInput)
  user.keyboard('jane@gmail.com')

  user.click(button)

  screen.debug() // warning because after using, we should remove it > make sure in the log will show the row that we added
})
