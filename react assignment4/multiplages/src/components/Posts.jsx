import React, { useEffect, useState } from 'react'

const Posts = () => {
  const[posts,setposts]=useState(null)
  async function fetchposts()
  {
    const data=await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const result=await data.json()
    console.log(result,"apple")
    setposts(result);
    
  }
  useEffect(()=>{
    fetchposts()
  },[])
  return (
   <div className='bg-black '>
    <div className='w-svw mb-16 flex flex-col justify-center items-center gap-3 '>
      {
     posts && posts.slice(10,15).map((item)=>{
      return(
        <div  className=' border w-3/4  rounded-3xl felx flex-col items-start justify-center p-3 mt-10 text-white bg-slate-500 bg-opacity-25 backdrop-blur-3xl'>
          <p><b>SERIAL_NO</b>:{item.id}</p>
          <p><b>Title</b>:{item.title}</p>
          <p><b>BODY</b>:{item.body}</p>
        </div>
      )
     })
      }
      </div></div>
  )
}

export default Posts
