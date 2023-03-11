import React from 'react'

// (1) App.js
const UserForm = () => {
  return (
    <form>
      <div className='form-row'>
        <label>Name</label>
        <input />
      </div>
      <div className='form-row'>
        <label>Email</label>
        <input />
      </div>
      <button>Add User</button>
    </form>
  )
}

export default UserForm
