/*
  Recording Function Calls P1
  
  (1) UserForm.test.js

  (***) after running test > "w" > "p" to filter
    > pic: filter-test

  
  >> right now, there is an error about onUserAdd() 
    > this is because we test on UserForm only > and we just render <UserForm/>, without <App/> > onUserAdd() === undefined 

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
