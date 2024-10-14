import ContactUs from '@/components/Contact/Contactus'
import Header from '@/components/ui/reusableComponent/Header'

 const index = () => {
  return (
    <section className='mt-20'>
        <Header title = "Contact"/>
        <ContactUs />
    </section>
  )
}

export default index