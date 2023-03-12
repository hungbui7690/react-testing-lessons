/*
  Querying Elements by Labels
  > pic: query-by-labels > 2 methods to get > recommendation by react-testing-lib: use getByRole()
  - later, if we add more inputs > our test won't work 
  
  (1) UserForm.[js]
  (2) UserForm.test.js

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
