/*
  Recording Function Calls P2
  
  (1) UserForm.test.js

  > after fixing, this test is passed > but it doesn't meet our goal
  > our goal is to make sure onUserAdd is called with email/name

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
