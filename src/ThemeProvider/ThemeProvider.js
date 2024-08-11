import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
 

 export const themeContext =createContext()


function ThemeProvider({children}){
const[users,setUsers]=useState([])

 useEffect( ()=>{
    axios.get(' https://reqres.in/api/users').then((response)=>{
        setUsers(response.data.data)
    })
 },[])
  return (
    <div>
        <themeContext.Provider value={{users}}>
            {children}
        </themeContext.Provider>
      
    </div>
  )
}

export default ThemeProvider
