import React from 'react'
import Container from '../../ui/Container'
import { GalleryImages } from '../../ui/data'
import { StonIcon } from '../../ui/icon'
import Link from 'next/link'


const SocialGallary = () => {

  return (
    <div className='py-10'>
      <Container>
        <div>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6  place-content-center place-items-center relative'>
            {
              GalleryImages.map((item) => (

                <a href=""  key={item.id}>
                  <div className='group transition w-fit h-fit relative overflow-hidden'>
                    <div className=' w-full h-full bg-black transition-all absolute top-[-200%] left-0 group-hover:top-[0%] opacity-40'></div>
                    <img className='w-full h-full ' src={item.url} />
                    <div className='absolute '
                      style={{
                        margin: 0,
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        msTransform: 'translate(-50%, -50%)',
                        transform: 'translate(-50%, -50%)',
                      }}
                    >
                     <div className=' flex justify-center items-center '>
                     <i className='text-white text-4xl'><StonIcon/></i>
                    
                     </div>
                    </div>
                  </div>
                </a>
              ))
            }
            <div className='h-full'
              style={{
                margin: 0,
                position: 'absolute',
                top: '50%',
                left: '50%',
                msTransform: 'translate(-50%, -50%)',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <div className='flex justify-center items-center w-full h-full
                  
                  ' >
                <a className='flex gap-2 py-2 px-8 bg-white text-tertiary rounded-full' href="https://www.google.com"><span className='text-2xl mt-1 '><StonIcon /></span><span className='text-xl '>Instagram</span></a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default SocialGallary