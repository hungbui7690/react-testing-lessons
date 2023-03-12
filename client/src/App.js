/*
  Recording Function Calls P3
  
  (1) UserForm.test.js


*/

import { useState } from 'react'
import UserForm from './UserForm'
import UserList from './UserList'

function App() {
  const [users, setUsers] = useState([])

  const onUserAdd = (user) => {
    setUsers([...users, user])
  }

  return (
    <div className='container'>
      <UserForm onUserAdd={onUserAdd} />
      <hr />

      {/* (2) */}
      <UserList users={users} />
    </div>
  )
}

export default App
