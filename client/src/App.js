/*
  Another Query Function Fallback
  - fallback #2
    > prefer to use fallback#1 > no eslint
  
  (1) UserList.test.js


  (***) need to enable eslint extensions + config in package.json
    "eslintConfig": {
        "extends": [
            "react-app",
            "react-app/jest"
        ]
    },

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
