import React from 'react'
import Register from './Register'

const UserInfo = (props) => {
  return (
        <div>
          {props.users.map((user, index) => (
            <div key={index}>
              <Register user={user} />
            </div>
          ))}
        </div>
  )
}

export default UserInfo; 