import About_us from '@/components/About/About-us'
import Certificate from '@/components/About/Certificate'
import Feature from '@/components/About/Feature'
import Review from '@/components/Home/Review'
import Youtube from '@/components/About/YoutubeVideo'
import Header from '@/components/ui/reusableComponent/Header'

const about = () => {

  return (
  <section className='mt-20'>
      <Header title = "About us" />
      <About_us/>
      <Feature/>
      <Youtube/>
    
      <Certificate/>
  </section>
  )
}

export  default about
