import React from 'react'
import { TfiArrowCircleDown } from 'react-icons/tfi'

const Faq = () => {
  return (
    <div>
        <div className='container mx-auto'>
            <div className='mb-[50px]'>
                <h1 className='text-[26px] font-bold'>Frequently Asked Questions</h1>
                <p className='text-base text-primary'>Learn more about Vrom and get a success</p>
            </div>
            <div className='flex flex-wrap gap-[50px]'>
                <div className='border rounded-full border-primary flex justify-between items-center w-full py-4 px-6'>
                    <div>
                        <span className='text-base font-medium '>What if I crash the car?</span>
                    </div>
                    <TfiArrowCircleDown />
                </div>
                <div className='border rounded-full border-primary flex justify-between items-center w-1/2 py-4 px-6'>
                    <div>
                        <span className='text-base font-medium '>What if I crash the car?</span>
                    </div>
                    <TfiArrowCircleDown />
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Faq