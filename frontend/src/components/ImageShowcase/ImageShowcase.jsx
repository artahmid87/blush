import React, { useEffect, useRef } from 'react';
import { useGetAllGalleryQuery } from '@/redux/api/Api';
import { gsap } from 'gsap';

const ImageShowCase = () => {
  const { data,isError, error, isLoading } = useGetAllGalleryQuery();
  const imageRefs = useRef([]);

  useEffect(() => {

    gsap.from(imageRefs.current, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.2,
    });
  }, [data]); 


  return (
    <div className="container mx-auto py-10 bg-white">
       {
        isLoading && (<div className="text-center py-20 text-7xl flex justify-center items-center"> Loading....</div>)
    }{
        isError && (<div className="text-center py-20 text-7xl flex flex-col justify-center items-center"> <h1>Something Went Wrong!</h1> <h1>Please! try again</h1></div>)
    }
   
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden shadow-lg"
            ref={(el) => (imageRefs.current[index] = el)} // Attach the ref to each image
          >
            <img
              src={`http://localhost:5000/images/gallery_img/${item.path}`}
              alt={item.title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center text-white text-lg font-semibold">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageShowCase;
