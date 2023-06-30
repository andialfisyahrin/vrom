import React from 'react'
import CarIcon from '../assets/car.svg'
import CardIcon from '../assets/card.svg'
import SecureIcon from '../assets/securityuser.svg'
import CubeIcon from '../assets/convert3dcube.svg'
import BenefitImg from '../assets/benefits.png'
import Star from '../assets/Star.svg'
import Senna from '../assets/senna.png'

const Benefits = () => {
  return (
    <div className='bg-white'>
        <div className='container mx-auto py-[100px] flex items-center justify-center'>
            <div className='flex items-center justify-center w-1/2'>
                <div className='absolute'>
                    <div>
                        <img src={BenefitImg} alt='' />
                    </div>
                    
                    <div className='bg-white p-[26px] rounded-[26px] absolute -bottom-14 -right-14'>
                        <div className='mb-3.5'>
                            <p className='text-base'>Car was awesome that I can<br />win the most popular race<br />easily. Thank Vrom.</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <div className='flex flex-col text-sm text-primary'>
                                <span>Senna</span>
                                <span>Great Racer</span>
                            </div>
                            <div className='flex items-center'>
                                <img src={Star} alt=''  />
                                <img src={Star} alt=''  />
                                <img src={Star} alt=''  />
                                <img src={Star} alt=''  />
                                <img src={Star} alt=''  />
                            </div>
                        </div>
                    </div>
                    <div className='absolute -top-14 -left-14'>
                        <img src={Senna} alt='' />
                    </div>
                </div>
            </div>
            
            <div className='flex flex-col justify-center w-1/2'>
                <div className='mb-[30px]'>
                    <h1 className='text-[26px] font-bold'>Extra Benefits</h1>
                    <p className='text-base text-primary'>You drive safety and famous</p>
                </div>
                <div className='flex flex-col gap-[30px]'>
                    <div className='flex items-center gap-4'>
                        <div className='bg-blue-900 p-[19px] rounded-[26px]'>
                            <img src={CarIcon} alt='' />
                        </div>
                        <div className=''>
                            <h2 className='text-xl font-bold'>Delivery</h2>
                            <p className='text-sm text-primary'>Just sit tight and wait</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='bg-blue-900 p-[19px] rounded-[26px]'>
                            <img src={CardIcon} alt='' />
                        </div>
                        <div className=''>
                            <h2 className='text-xl font-bold'>Pricing</h2>
                            <p className='text-sm text-primary'>12x Pay Installment</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='bg-blue-900 p-[19px] rounded-[26px]'>
                            <img src={SecureIcon} alt='' />
                        </div>
                        <div className=''>
                            <h2 className='text-xl font-bold'>Secure</h2>
                            <p className='text-sm text-primary'>Use your plate number</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='bg-blue-900 p-[19px] rounded-[26px]'>
                            <img src={CubeIcon} alt='' />
                        </div>
                        <div className=''>
                            <h2 className='text-xl font-bold'>Fast Trade</h2>
                            <p className='text-sm text-primary'>Change car faster</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Benefits