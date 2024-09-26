import React, { useEffect, useState } from 'react'

const Users = () => {
  const[users,setusers]=useState(null)
  async function fetchusers()
  {
    const data=await fetch(`https://jsonplaceholder.typicode.com/users`)
    const result=await data.json()
    console.log(result,"apple")
    setusers(result);
    
  }
  useEffect(()=>{
    fetchusers()
  },[])
  return (
   <div className=' '>
    <div className='w-svw mb-16 flex flex-col justify-center items-center gap-3'>
      {
     users && users.slice(1,10).map((item)=>{
      return(
        <div  className=' border w-3/4  rounded-3xl felx flex-col items-start justify-center p-3 mt-10 text-white bg-slate-500 bg-opacity-25 backdrop-blur-3xl'>
          <p><b>SERIAL_NO</b>:{item.id}</p>
          <p><b>NAME</b>:{item.name}</p>
          <p><b>USERNAME</b>:{item.username}</p>
          <p><b>PHONE</b>:{item.phone}</p>
          <p><b>WEBSITE</b>:{item.website}</p>
           
        </div>
      )
     })
      }
      </div></div>
  )
}

export default Users
