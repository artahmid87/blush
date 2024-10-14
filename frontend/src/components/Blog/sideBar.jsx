
import { useGetBlogQuery } from "@/redux/api/Api";
import Link from "next/link";
import Container from "../ui/Container";

const BlogSidebar = () => {
    const { data,isLoading, isError } = useGetBlogQuery()

    return (
      <Container>
          <aside className="border-r border-[#ccc] bg-[#ffeeeb] w-full lg:w-full h-[100vh] py-10 px-8">
              {
        isLoading && (<div className="text-center py-20 text-7xl flex justify-center items-center"> Loading....</div>)
    }{
        isError && (<div className="text-center py-20 text-7xl flex justify-center items-center"> <h1>Something Went Wrong!</h1> <h1>Please! try again</h1></div>)
    }
            <h3 className="font-secondery text-tertiary font-medium text-lg">Recent Posts</h3>
            <div>
                {data?.slice(0,4).map((item) => (
                    <Link key={item.id} href={`/blog/${item.id}/#blog`}>
                        <div className="flex gap-4 py-4">
                            <div>
                                <img className="w-16 h-14 md:w-20 md:h-20"
                                src={"http://localhost:5000/images/blog_img/" + item?.file} alt={item?.title}/>
                            </div>
                            <div>
                                <h1 className="text-tertiary font-secondery text-[16px] leading-snug">{item.title.slice(0, 50)}...</h1>
                                <p className="text-[12px] text-primary pt-4 ">{new Date(item.createdAt).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long', 
                                    day: 'numeric'
                                })}</p>
                             
                            </div>
                        </div>
                    </Link>
                ))}

            </div>
        </aside>
      </Container>
    );
};

export default BlogSidebar;
