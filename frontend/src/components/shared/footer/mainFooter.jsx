import Container from '@/components/ui/Container';
import { CalenderIcon, EmailIcon, LocationIcon, PhoneIcon } from '@/components/ui/icon';
import Link from 'next/link';
import {  useRouter } from 'next/router';


export default function MainFooter() {

    const { pathname } = useRouter();
  
    const path = '/'

    return (
        <footer className={`${ pathname !== path ? 'bg-[#252525] text-white' : 'bg-[#ffffff] text-tertiary'}   py-14 relative`}>
            
            <Container>
                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 px-6 lg:h-[60vh]" style ={{
                    zIndex:999
                }}>

                    {/* About Us Section */}
                    <div>
                        <h2 className={`${ pathname !== path ? 'text-white' : ' text-tertiary'}text-lg md:text-4xl font-semibold mb-8 font-secondery`}>About Us</h2>
                        <p className="text-sm md:text-lg ">
                            Blush & Glow Beauty Bar is your go-to destination for luxurious beauty services. Our team of professionals is dedicated to enhancing your natural beauty with personalized care.
                        </p>
                        
                        <a href="#appointment">
                    <button
                 
                      className="group hover:bg-primary bg-white transition-all py-2 mt-10 px-8 flex gap-2 justify-center items-center rounded-full"
                      style={{
                        boxShadow: '1px 1px 8px gray',
                      }}
                    >
                      <span className="flex justify-center items-center text-2xl group-hover:text-primary text-white transition-all w-8 h-8 md:w-10 md:h-10 group-hover:bg-white bg-primary rounded-full ml-[-20px]">
                        <CalenderIcon />
                      </span>
                      <span className="text-md md:text-lg transition-all group-hover:text-white text-primary font-secondery">
                        Make An Appointment
                      </span>
                    </button>
                  </a>
                    </div>

                    {/* FAQ Section */}
                    <div>
                        <h2 className={`${ pathname !== path ? 'text-white' : ' text-tertiary'}text-lg md:text-4xl font-semibold mb-8 font-secondery`}>FAQ</h2>
                        <ul className="space-y-6 text-sm md:text-xl">
                            <li><Link className="hover:underline" href="/#booking">How can I book an appointment?</Link></li>
                            <li><Link className="hover:underline" href="/services">What services do you offer?</Link></li>
                            <li><Link className="hover:underline" href="/contact">How can contct?</Link></li>
                        </ul>
                    </div>

                    {/* News Feed Section */}
                    <div>
                        <h2 className={`${ pathname !== path ? 'text-white' : ' text-tertiary'}text-lg md:text-4xl font-semibold mb-8 font-secondery`}>News Feed</h2>
                        <ul className="space-y-6 text-sm md:text-xl">
                            <li><Link className="hover:underline" href="/blog">Latest Trends in Beauty</Link></li>
                            <li><Link className="hover:underline " href="/imageShowcase">Explore Gallery</Link></li>
                            <li><Link className="hover:underline" href="/services">Exclusive Offers</Link></li>
                        </ul>
                    </div>

                    {/* Contact Us Section */}
                    <div className=" gap-20 w-full">
                        <h1 className={`${ pathname !== path ? 'text-white' : ' text-tertiary'}text-lg md:text-4xl font-semibold mb-8 font-secondery`}>Contact us</h1>
                        <p className="flex  gap-2 text-sm md:text-xl"><span className="mt-1"><LocationIcon /></span><span>5 Massey Square, East York, ON M4C 5L6, canada.</span></p>
                        <p className="flex  gap-2 py-6 text-sm md:text-xl"><span className="mt-1"><PhoneIcon /></span><a href="cellto">Call: +1 (647)-607-2276</a></p>
                        <p className="flex  gap-2 text-sm md:text-xl"><span className="mt-1"><EmailIcon /></span><a href="mailto:artahmid87@gmail.com">blushglowbar@gmail.com</a></p>

                    </div>

                </div>
            </Container>
            <div className='invisible lg:visible banner animate-slide-left-right absolute top-0 left-0 -ml-10 py-6' style={{
                zIndex:0
            }}>
                <img src="/images/home/footer.png" alt="" />
            </div>

            {/* Copyright Section */}
            <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
                &copy; {new Date().getFullYear()} Blush & Glow Beauty Bar. All rights reserved.
            </div>
        </footer>
    );
}
