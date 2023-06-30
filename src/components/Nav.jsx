import React from 'react'
import Logo from '../assets/VRoM.png'

const Nav = () => {
  return (
    <nav>
        <div className='container mx-auto mt-10'>
            <div className='flex items-center justify-between'>
                <div>
                    <img src={Logo} alt='' />
                </div>
                <div className='flex items-center text-primary gap-[50px]'>
                    <div className='text-black font-semibold'>Landing</div>
                    <div>Catalog</div>
                    <div>Benefits</div>
                    <div>Stories</div>
                    <div>Maps</div>
                </div>
                <button className='border border-black py-4 px-7 rounded-full'>Log In</button>
            </div>
        </div>
    </nav>
  )
}

export default Nav