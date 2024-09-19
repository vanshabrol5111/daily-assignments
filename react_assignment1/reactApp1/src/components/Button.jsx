import React from 'react'

const Button = ({buttonText,buttonColor}) => {

  return (
    <div>
        <button 
        className={`${buttonColor} px-5 py-2 rounded-md ml-2 mt-2`} 
   
        
        >{buttonText}</button>
  
    </div>
  )
}

export default Button
