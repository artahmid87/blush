import Container from "../ui/Container"
import Layout from "./Layout"

const BlogById = (props) => {
  const { data, isLoading, isError } = props.blogData


  return (
    <Layout>
      <Container>
        <div id="blog" className="w-full md:w-[600px] lg:w-[800px] h-full">
          {
            <div key={data?.id}>
              <img className="w-full  flex justify-center items-start h-[300px] lg:h-[500px] "
              src={"http://localhost:5000/images/blog_img/" + data?.file} alt={data?.title}/>
              <p className="text-[16px] text-primary py-8">{new Date(data?.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</p>
              <p className="text-secondery text-justify">{data?.description}</p>
            </div>
          }
        </div>
      </Container>
    </Layout>
  )
}

export default BlogById
