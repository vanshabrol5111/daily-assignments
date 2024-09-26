import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Nav from '../components/Users'


const Home_page = () => {
  return (
   
    <div>
   <div className=''>
   <div  className='flex gap-7 justify-center my-5  '>
    <NavLink className={""} to='/'>HOME</NavLink>
    <NavLink className={""} to='/todos'>TODOS</NavLink>
    <NavLink className={""}to='/users'>USERS</NavLink>
    <NavLink className={""}to='/posts'>POSTS</NavLink>

    </div>
 
    <Outlet></Outlet>
   </div>

 
  </div>
  )
}

export default Home_page
