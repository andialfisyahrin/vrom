import React from 'react'
import Car1 from '../assets/car1.png'
import Star from '../assets/star.svg'

const Popular = () => {
  return (
    <div className='bg-gray-100 '>
        <div className='container mx-auto py-[100px]'>
            <div className='mb-[30px]'>
                <h1 className='text-[26px] font-bold'>Popular Cars</h1>
                <p className='text-base text-primary'>Start your big day</p>
            </div>
            <div className='flex flex-wrap justify-between gap-[29px]'>
                <div className='bg-white p-4 rounded-[22px]'>
                    <div>
                        <div className='mb-4'>
                            <h2 className='text-xl font-bold'>Taycan 4S</h2>
                            <p className='text-sm text-primary'>Electric Car</p>
                        </div>
                        <div className='mb-4'><img src={Car1} alt='' /></div>
                        <div className='flex items-center justify-between'>
                            <div>
                                <span className='text-secondary font-bold text-base'>$250</span>
                                <span className='text-primary text-base'>/day</span>
                            </div>
                            <div className='flex items-center gap-[2px]'>
                                <span className='font-bold'>(4.8/5)</span>
                                <img src={Star} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-white p-4 rounded-[22px]'>
                    <div>
                        <div className='mb-4'>
                            <h2 className='text-xl font-bold'>Taycan 4S</h2>
                            <p className='text-sm text-primary'>Electric Car</p>
                        </div>
                        <div className='mb-4'><img src={Car1} alt='' /></div>
                        <div className='flex items-center justify-between'>
                            <div>
                                <span className='text-secondary font-bold text-base'>$250</span>
                                <span className='text-primary text-base'>/day</span>
                            </div>
                            <div className='flex items-center gap-[2px]'>
                                <span className='font-bold'>(4.8/5)</span>
                                <img src={Star} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-white p-4 rounded-[22px]'>
                    <div>
                        <div className='mb-4'>
                            <h2 className='text-xl font-bold'>Taycan 4S</h2>
                            <p className='text-sm text-primary'>Electric Car</p>
                        </div>
                        <div className='mb-4'><img src={Car1} alt='' /></div>
                        <div className='flex items-center justify-between'>
                            <div>
                                <span className='text-secondary font-bold text-base'>$250</span>
                                <span className='text-primary text-base'>/day</span>
                            </div>
                            <div className='flex items-center gap-[2px]'>
                                <span className='font-bold'>(4.8/5)</span>
                                <img src={Star} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-white p-4 rounded-[22px]'>
                    <div>
                        <div className='mb-4'>
                            <h2 className='text-xl font-bold'>Taycan 4S</h2>
                            <p className='text-sm text-primary'>Electric Car</p>
                        </div>
                        <div className='mb-4'><img src={Car1} alt='' /></div>
                        <div className='flex items-center justify-between'>
                            <div>
                                <span className='text-secondary font-bold text-base'>$250</span>
                                <span className='text-primary text-base'>/day</span>
                            </div>
                            <div className='flex items-center gap-[2px]'>
                                <span className='font-bold'>(4.8/5)</span>
                                <img src={Star} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Popular