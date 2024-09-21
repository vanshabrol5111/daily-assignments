import React from 'react'

const Button = ({onsearch}) => {
  return (
    <div>
        
      <button 
        type="submit"  className='border mt-6 ml-10 bg-black text-gray-50 rounded-3xl p-4'
      onClick={onsearch} > Search-button</button>
    </div>
  )
}

export default Button
