import React from 'react'
import Container from '../ui/Container'
import ServicesComponent from '../ui/reusableComponent/servicesComponent'
import { ServiceData } from '../ui/data'
import HeadingComponent from '../ui/reusableComponent/HeadingComponent'

 const Services = () => {

  const headingData = [
    {
      headline: "What we provide",
      title1: "Services",
      title2: "Plan",
      description: "",
    },
  ];


  return (
    <div className='overflow-hidden py-20'>
        <Container>
        <HeadingComponent headingData={headingData} />
 
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4" >
            {
              ServiceData?.map((item) =>(
              <div key={item.id}>
                    <ServicesComponent item = {item}/>
              </div>
              ))
            }
         
          </div>
        </Container>
    </div>
  )
}

export default Services
