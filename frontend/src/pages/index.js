import React from 'react';
import Welcome from '@/components/Home/Welcome';
import AboutUs from '@/components/Home/AboutUs';
import Services from '@/components/Home/Services';
import Appointment from '@/components/Home/Appointment/Appointment';
import NewsFeed from '@/components/Home/NewsFeed';
// import Header from '@/components/Home/Header';
import BookingSteps from '@/components/Home/BookingSteps';
import Review from '@/components/Home/Review';
// import Header from '@/components/Home/test';
import Header from '@/components/Home/Header';


const Home = () => {
  return(
   
   <section className='mt-20 overflow-hidden'>
    <Header/>
      {/* <Welcome/> */}
      {/* <Header/> */}
      <BookingSteps/>
      <AboutUs/>
      <Services/>
      <Appointment/>
      <Review/>
      <NewsFeed/>

     
   </section>
   
   
 
  )
  
}

export default Home;