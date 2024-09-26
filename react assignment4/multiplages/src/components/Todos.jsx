import React, { useEffect, useState } from 'react'

const Todos = () => {
    const[todos,settodos]=useState(null)
    async function fetchtodos()
    {
      const data=await fetch(`https://jsonplaceholder.typicode.com/todos`)
      const result=await data.json()
      console.log(result,"apple")
      settodos(result);
      
    }
    useEffect(()=>{
      fetchtodos()
    },[])
    return (
        <div className='bg-black'>
         <div className='w-svw mb-16 flex flex-wrap justify-center items-center gap-3 '>
           {
          todos && todos.slice(110,120).map((item)=>{
          
           return(
             <div  key={item.id} className='   border w-3/4 border w-96 rounded-3xl felx flex-col items-start justify-center p-3 mt-10  text-white bg-slate-500 bg-opacity-25 backdrop-blur-3xl'>
               <p><b>SERIAL_NO</b>:{item.id}</p>
               <p><b>Title</b>:{item.title}</p>
              
              
               <p><b>COMPLETED</b>:{`${item?.completed ? "True" : "False"}`}</p>
             </div>
           )
          })
           }
           </div></div>
       )
  }

export default Todos
