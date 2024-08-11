import React, { useContext } from 'react'
import { themeContext } from '../ThemeProvider/ThemeProvider'
import { useParams } from 'react-router-dom'
import './Style.css'

function UserDetail() {
    const {users}= useContext(themeContext)
    const {id}= useParams()
    // console.log(id)
  return (
    <div>
      <div>
        <h1 className='page2'>User Details</h1>
        <div className='container'>
        {users.filter((user)=>user.id==id).map((user)=>{
          console.log(user)
          return(
            <div key={user.id} className='row'>
              <div >
                <img src={user.avatar} alt="" />
              </div>
              <div>
                <h2>{user.first_name}{user.last_name}</h2>
                <h5>{user.email}</h5>
              </div>

            </div>
          )
        })}
        </div>
      
    </div>
    </div>
  )
}

export default UserDetail
