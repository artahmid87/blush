import Appointment from '@/components/Home/Appointment/Appointment'
import Services from '@/components/services/ServicesDetails'
import Header from '@/components/ui/reusableComponent/Header'

 const index = () => {

  return (
  <section className='bg-[#f2f2f2] mt-20 '>
    <Header  title ='Services'/>
    <Services/>
    <Appointment/>

  </section>
  )
}
export default index
