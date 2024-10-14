import Blog from "@/components/Blog/Blog"
import Header from "@/components/ui/reusableComponent/Header"

 const index = () => {
  return (
 <section className='mt-20'>
    <Header title ="Blog & News"/>
    <Blog/>
 </section>
  )
}

export default index