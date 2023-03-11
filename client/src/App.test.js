// (***)
import { render, screen, waitFor } from '@testing-library/react'
import user from '@testing-library/user-event'
import App from './App'

// (1)
test('shows 6 products by default', async () => {
  render(<App />)

  // make sure we see 6 h3 elements > 6 products
  const headings = await screen.findAllByRole('heading')
  expect(headings).toHaveLength(6)
})

// (2)
test('clicking on the button loads 6 more products', async () => {
  render(<App />)

  // find "Loading" button and simulate clicking on that button
  const button = await screen.findByRole('button', {
    name: /load more/i,
  })
  await user.click(button)

  // after click on the button, we have to wait for a little bit of time
  await waitFor(async () => {
    const headings = await screen.findAllByRole('heading')
    expect(headings).toHaveLength(12) // make sure we have 12 headings
  })
})
