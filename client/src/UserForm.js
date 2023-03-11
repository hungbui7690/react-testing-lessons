import React, { useState } from 'react'

const UserForm = ({ onUserAdd }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    onUserAdd({ name, email })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-row'>
        <label>Name</label>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
      </div>
      <div className='form-row'>
        <label>Email</label>
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
      </div>
      <button>Add User</button>
    </form>
  )
}

export default UserForm
