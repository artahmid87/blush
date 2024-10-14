import ImageShowCase from '@/components/ImageShowcase/ImageShowcase'
import Header from '@/components/ui/reusableComponent/Header'
import React from 'react'

 const index = () => {
  return (
    <section className='mt-20'>
        <Header title = "Gallery" />
         <ImageShowCase/>
    </section>
  )
}

export default index