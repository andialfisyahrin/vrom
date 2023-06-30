import React from 'react'
import HeroImg from '../assets/hero.png'

const Hero = () => {
  return (
    <div className='mt-[84px] mb-[100px]'>
      <div className='container mx-auto flex flex-col items-center'>
        <div>
          <img src={HeroImg} alt='hero image' />
        </div>
        <div className='flex gap-10 mt-[78px]'>
          <div>
            <h2 className='text-[26px] font-bold text-center'>380</h2>
            <p className='text-base text-primary text-center'>Horse Power</p>
          </div>
          <div className='w-[1px] h-[70px] bg-primary'></div>
          <div>
            <h2 className='text-[26px] font-bold text-center'>12S</h2>
            <p className='text-base text-primary text-center'>Speed AT</p>
          </div>
          <div className='w-[1px] h-[70px] bg-primary'></div>
          <div>
            <h2 className='text-[26px] font-bold text-center'>AWD</h2>
            <p className='text-base text-primary text-center'>Drive</p>
          </div>
          <div className='w-[1px] h-[70px] bg-primary'></div>
          <div>
            <h2 className='text-[26px] font-bold text-center'>A.I</h2>
            <p className='text-base text-primary text-center'>Tracking</p>
          </div>
          <button className='text-white bg-secondary rounded-full py-4 px-10 shadow shadow-secondary'>Rent Now</button>
        </div>
      </div>
        
    </div>
  )
}

export default Hero