import React, { useState } from 'react'

const UserForm = () => {
  // (1)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  // (3)
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email)
  }

  return (
    // (2)
    <form onSubmit={handleSubmit}>
      <div className='form-row'>
        <label>Name</label>
        <input
          value={name} // (a)
          onChange={(e) => {
            setName(e.target.value) // (b)
          }}
        />
      </div>
      <div className='form-row'>
        <label>Email</label>
        <input
          value={email} // (a)
          onChange={(e) => {
            setEmail(e.target.value) // (b)
          }}
        />
      </div>
      <button>Add User</button>
    </form>
  )
}

export default UserForm
