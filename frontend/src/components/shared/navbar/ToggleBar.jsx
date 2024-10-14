import {  CloseIcon, EmailIcon, FacebookIcon, InstagramIcon, LocationIcon, OpenIcon, PhoneIcon, YoutubeIcon } from '@/components/ui/icon';
import { useState } from 'react';

export default function ToggleBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed invisible md:visible top-0 left-[-200px] h-full w-[40%] bg-white text-tertiary transition-transform transform ${
          isOpen ? 'translate-x-[180px]' : '-translate-x-full'
        }`}
        style={{
            zIndex:"9999"
        }}
      >
        <nav className="py-4 px-8">
          <div>
            <img src="/images/home/logo.png" alt="" />
            <p className='text-[16px] text-secondery py-4 text-center'>We take a bottom-line approach to each project. Our clients consistently see increased traffic, enhanced brand loyalty and new leads thanks to our work.</p>
            <ul className='py-10'>
                <li className='flex gap-8 text-[#4d4d4d]'><div><PhoneIcon className ="text-4xl "/></div>
                 <div className='text-[20px]'>
                <h1 className=' font-secondery'> Call Us:</h1>
                 <h1>+1(647-607-2276)</h1>
                 </div>
                </li>
                <li className='flex gap-8 text-[#4d4d4d] py-6'><div><EmailIcon className ="text-4xl "/></div>
                 <div className='text-[20px]'>
                <h1 className=' font-secondery'> Write Us:
               </h1>
                 <h1> blushglowbar@gmail.com</h1>
                 </div>
                </li>

                 <li className='flex gap-8 text-[#4d4d4d]'><div><LocationIcon className ="text-4xl "/></div>
                 <div className='text-[20px]'>
                <h1 className=' font-secondery'> Address:
               </h1>
                 <h1>5 Massey Square, East York, ON M4C 5L6, canada</h1>
                 </div>
                </li>
            </ul>
            <ul className='flex gap-6 justify-center items-center'>
                <li className='text-3xl text-blue-600 hover:text-primary transition-all'><a href="#"><FacebookIcon/></a></li>
                <li className='text-3xl text-[#ff4a4a] hover:text-primary transition-all'><a href="#"><InstagramIcon/></a></li>
                <li className='text-4xl text-red-500 hover:text-primary transition-all'><a href="#"><YoutubeIcon/></a></li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Menu Toggle Button */}
      <button onClick={toggleMenu} className={` focus:outline-none text-2xl ${isOpen ? "text-white z-50 ": "text-tertiary"}`}type="button">
            
        {isOpen ? <CloseIcon/> : <OpenIcon/>}
      </button>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
}
