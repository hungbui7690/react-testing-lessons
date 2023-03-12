/*
  Testing the UserList P1 & Testing Playground
  > pic: test-userlist
  
  (1) create UserList.test.js


  - sometimes, we don't remember or don't know which functions we want to use to select the element 
    > screen.logTestingPlaygroundURL()

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
