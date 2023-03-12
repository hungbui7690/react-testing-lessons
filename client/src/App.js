/*
  Introducing Mock Functions
  > pic
  
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
      <UserList users={users} />
    </div>
  )
}

export default App
