import React from 'react'

import { Route,Routes } from 'react-router-dom'
import Nav from './components/Users'
import Home_page from './pages/Home_page'
import Users from './components/Users'
import Home from './components/Home'
import Posts from './components/posts'
import Todos from './components/Todos'


const App = () => {
  return (
    <div className='text-white h-screen bg-black flex justify-between '>
   
      <Routes>
        <Route path='/' element={<Home_page/>}> 
        <Route path='/' element={<Home/>}></Route>
        <Route path='/users' element={<Users/>}></Route>
        <Route path='/posts' element={<Posts></Posts>} ></Route>
        <Route path='/todos' element={<Todos></Todos>}></Route>
        </Route>
        {/* <Route path='/todos'> element{<Todos_Page/>}</Route>
        <Route path='/users'> element{<Users_Page/>}</Route>
        <Route path='/posts'> element{<Posts_Page/>}</Route> */}
      </Routes>
    </div>
  )
}

export default App
