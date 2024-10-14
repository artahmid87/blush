import Container from '@/components/ui/Container'
import { ClockIcon, LocationIcon } from '@/components/ui/icon'
import React from 'react'

const Schedule = () => {
  return (
    <div>
    <Container>
    <div>
        <h1 className='flex gap-4'><span className='flex justify-center items-center bg-primary w-10 h-10 rounded-full text-2xl text-white '><ClockIcon/></span><span className = "text-tertiary text-4xl font-bold font-secondery pb-6">Hours:</span></h1>
        <p className ="text-gray-800 text-[20px] py-2">Mon to Fri: 7:30 am — 1:00 am</p>
        <p className ="text-800 text-[20px] py-2">Mon to Fri: 7:30 am — 1:00 am</p>
        <p className ="text-800 text-[20px] py-2">Mon to Fri: 7:30 am — 1:00 am</p>
      </div>
      <div className ="py-6">
      <h1 className='flex gap-4'><span className='flex justify-center items-center bg-primary w-10 h-10 rounded-full text-2xl text-white '><LocationIcon/></span><span className = "text-tertiary text-4xl font-bold font-secondery pb-6">Location:</span></h1>
      <p className ="text-gray-600 text-[22px] py-2 font-bold ">5 Massey Square, East York, ON M4C 5L6, canada</p>
      </div>
    </Container>
    </div>
  )
}

export default Schedule