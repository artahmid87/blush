import {createApi, fetchBaseQuery} from  '@reduxjs/toolkit/query/react'

export const Api = createApi({
    reducerPath:'postApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:5000'
    }),
    endpoints: (builder ) =>({
      // Appointment booking api
        bookingList: builder.query({
            query:()=> '/appointment/get/customer'
        }),

        // review get api
        review: builder.query({
            query:()=> '/review'
        }),

        // All Blog
        getBlog: builder.query({
          query: () => "/getBlog", 
        }),
       
        // single blog by id
        getBlogById: builder.query({
          query: (id) => `/getById/${id}`, 
        }),
       
        //Booking post api
        createBooking: builder.mutation({
          query: (booking) => ({
            url: '/appointment/booking',  
            method: 'POST',
            body: booking, 
          }),
        }),

        //Blog post api
         blogPost: builder.mutation({
          query: (post) => ({
            url: '/uploadBlog',  
            method: 'POST',
            body: post, 
          }),
        }),
        //Blog Update api
         updateBlog: builder.mutation({
          query: (id , update) => ({
            url: `/updateBlog/${id}`,  
            method: 'PUT',
            body: update, 
          }),
        }),

        //Blog delete api
         deleteBlog: builder.mutation({
          query: (id) => ({
            url: `/deleteBlog/${id}`,  
            method: 'DELETE',
          }),
        }),

      //booking delete api
          deleteBooking: builder.mutation({
            query: (id) => ({
              url: `/appointment/delete/booking/${id}`,
              method: 'DELETE',
            }),
            
          }),

          //admin login api
          adminLogin: builder.mutation({
            query: (credentials) => ({
              url: '/admin/login',  
              method: 'POST',
              body: credentials, 
            }),
          }),

           //Gallery post api
        uploadGallery: builder.mutation({
          query: (gallery) => ({
            url: '/galleryUpload',  
            method: 'POST',
            body: gallery, 
          }),
        }),
        // gallery get api
        getAllGallery: builder.query({
          query:()=> '/getGallery'
      }),
       // gallery get By ID api
       getGalleryById: builder.query({
        query:(id)=> `/getGelleryById/${id}`
    }),
    //Gallery Update api
    updateGallery: builder.mutation({
      query: ({id , update}) => ({
        url: `/updateGallery/${id}`,  
        method: 'PUT',
        body: update, 
      }),
    }),
    //Gallery delete api
    deleteGallery: builder.mutation({
      query: (id) => ({
        url: `/deleteGallery/${id}`,  
        method: 'DELETE',
      }),
    }),
          
    })
})

export const {
  useBookingListQuery ,
  useAdminLoginMutation ,
  useDeleteBookingMutation,
  useCreateBookingMutation,
  useReviewQuery,
  useGetBlogByIdQuery,
  useGetBlogQuery,
  useBlogPostMutation,
  useDeleteBlogMutation,
  useUpdateBlogMutation,
  useUploadGalleryMutation,
  useGetAllGalleryQuery,
  useUpdateGalleryMutation,
  useGetGalleryByIdQuery,
  useDeleteGalleryMutation,
  } = Api


