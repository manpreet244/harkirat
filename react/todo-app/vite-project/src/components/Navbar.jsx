import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full px-20 py-8'>
      <div className="logo font-['roboto-bold-italic ']" >lhziwhdogo </div>
      <div className="links font-madimi">
        {["Services" , "About me" ,"Work" , "Insights"].map((item ,index)=> (
            <a key={index} className="text-md font-semibold">{item}</a>
        ))}
      </div>
    </div>
  )
}

export default Navbar
