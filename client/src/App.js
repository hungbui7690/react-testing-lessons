/*
  Rendering the List of Users P1

*/

import { useState } from 'react'
import UserForm from './UserForm'

function App() {
  // (1)
  const [users, setUsers] = useState([])

  // (2)
  const onUserAdd = (user) => {
    setUsers([...users, user])
  }

  return (
    <div className='container'>
      {/* (3) */}
      <UserForm onUserAdd={onUserAdd} />
    </div>
  )
}

export default App
