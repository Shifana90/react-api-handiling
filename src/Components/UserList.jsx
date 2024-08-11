import React, { useContext } from 'react'
import { themeContext } from '../ThemeProvider/ThemeProvider'
import './Style.css'
import { Outlet, Link } from 'react-router-dom'

function UserList() {
  const { users } = useContext(themeContext)
  console.log(users)
  return (
    <div>
      <h1 className='page1'>Users List</h1>
      <div className='card-section'>
        {users.map((user) => {
          return (
            <Link to={`/details/${user.id}`}>
              <div key={user.id} className='card'>
                <img src={user.avatar} alt="" />
                <h4>{user.first_name}</h4>

              </div>
            </Link>

          )
        })}
        <Outlet />
      </div>
    </div>
  )
}

export default UserList
