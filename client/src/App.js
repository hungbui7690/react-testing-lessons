/*
  A Touch of Test Driven Development
  - go to browser > add a user 
  - after added, the fields in the form are not cleared
    > we want to make the test on this first, before making the app
    
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
