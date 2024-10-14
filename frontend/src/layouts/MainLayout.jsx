import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";
import { useRouter } from "next/router";


const MainLayout = ({ children }) => {
  const { pathname } = useRouter();

  const DynamicUpdateBlogRoute = pathname !== "/dashboard/updateBlog/[id]";
  const DynamicUpdateGalleryRoute =  pathname !== "/dashboard/gallery/[id]";
 
  return (
    <>
     {pathname !== "/login" &&  pathname !== "/dashboard"  && pathname !== "/dashboard/bookingList" && pathname !== "/dashboard/blog" && pathname !== "/dashboard/newPost" && pathname !== "/dashboard/updateBlog" && DynamicUpdateBlogRoute && pathname !== "/dashboard/uploadGallery" && pathname !== "/dashboard/gallery" && DynamicUpdateGalleryRoute && (
        <>
          <div className="size-5 fixed hidden lg:block left-0 top-0 bg-blue rounded-full"
            style={{ zIndex: 99999 }} />
          <Navbar />
        </>
      )}
      {children}

      {pathname !== "/login" && pathname !== "/dashboard" && pathname !== "/dashboard/bookingList" && pathname !== "/dashboard/blog" &&  pathname !== "/dashboard/newPost" && pathname !== "/dashboard/updateBlog" && DynamicUpdateBlogRoute && pathname !== "/dashboard/uploadGallery" && pathname !== "/dashboard/gallery" && DynamicUpdateGalleryRoute && (
        <>
          <Footer />
          <div className="fixed bottom-8 right-8 border-[4.5px] bg-white text-blue rounded-full cursor-pointer transition-all flex justify-center items-center size-14 lg:size-20 duration-300"
            style={{ zIndex: 999 }}
          >
          </div>
        </>
      )}
    </>
  );
};

export default MainLayout;
