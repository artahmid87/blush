import { useDeleteBlogMutation, useGetBlogQuery } from '@/redux/api/Api'
import { Button, Popconfirm } from 'antd/dist/antd';
import Link from 'next/link';

const BlogCrud = () => {

  const { data, isLoading, isError } = useGetBlogQuery()
  const [deleteBlog] = useDeleteBlogMutation();

  const handleDelete = async (id) => {
    try {
      await deleteBlog(id).unwrap()


    } catch (error) {
      console.log(error)
    }
    window.location.reload()
  };

  return (
    <div className='ml-60'>
      <div className='w-full h-16 bg-green-600 py-4 '>
        <h1 className='text-2xl font-bold text-center text-white'> {data?.length} Blog Posts</h1>
      </div>

      <div className='w-full flex items-center'>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 border border-gray-300">Title</th>
                <th className="px-4 py-2 border border-gray-300">Image</th>
                <th className="px-4 py-2 border border-gray-300">Description</th>
                <th className="px-4 py-2 border border-gray-300">Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="px-4 py-2 border border-gray-300">{item?.title?.slice(0, 50)}...</td>
                  <td className="px-4 py-2 border border-gray-300">
                    <img
                      src={"http://localhost:5000/images/blog_img/" + item?.file}
                      alt={item?.title}
                      className="w-16 h-16 mx-auto object-cover"
                    />
                  </td>
                  <td className="px-4 py-2 border border-gray-300">{item?.description?.slice(0, 100)}</td>
                  <td className="px-4 flex flex-col py-2 border border-gray-300">
                    <Link className='py-1 mb-2 px-1 bg-yellow-300 rounded-full hover:bg-white hover:text-blue-500 border border-blue-400 text-[14px]' href={`/dashboard/updateBlog/${item.id}`} >Update</Link>
                    <Popconfirm
                      title="Delete the Booking"
                      description="Are you sure to delete this Booking?"
                      onConfirm={() => handleDelete(item.id)}
                      okText="Yes"
                      cancelText="No"
                    >
                      <Button
                        className='px-4 py-1 bg-rose-500 rounded-3xl text-white hover:bg-white hover:text-red-500 transition-all'
                      >
                        Delete
                      </Button>
                    </Popconfirm>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default BlogCrud

