
const Blog = require("../database/model/blog.db");
const fs = require('fs'); 
const sharp = require("sharp");
const path = require("path");


const blogController = async (req, res, next) => {
  try {
    const { title, description } = req?.body; 

    
    if (!title || !description || req?.file?.path === undefined) {
      if (req?.file?.path) fs.unlinkSync(req?.file?.path); 
      return res.status(404).send({
        message: "Something went wrong!"
      });
    }

    // await sharp(req.file.path)
    // .resize({ width: 500 })   
    // .jpeg({ quality: 80 })    
    // .toFile(req.file.destination +  '/op-' + req.file.originalname);      



    const blog = await Blog.create({
       title, 
       description,
       file: req.file.originalname  
    });

   
  //   fs.unlink(req.file.path, (err) => {
  //     if (err) {
  //         console.error('Failed to delete the uploaded image:', err);
  //     } else {
  //         console.log('Uploaded image deleted successfully.');
  //     }
  // });


    return res.send(blog); 

  } catch (error) {
    next(error); 
  }
};

const getBlogController = async (req, res, next) => {
  try {

    const blog = await Blog.findAll({
      order: [['createdAt', 'DESC']]
    });
    return res.status(200).send(blog); 

  } catch (error) {
    next(error); 
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params; 
   
   
    const singleBlog = await Blog.findOne({
      where: {
        id: id
      }
    });
      return res.status(200).send(singleBlog);

  } catch (error) {
    next(error); 
  }
};


const updateBlogController = async (req, res, next) => {
  try {
    const { id } = req.params; 
    const { title, description } = req?.body;



    const blog = await Blog.findOne({
      where: {
        id: id
      }
    });

    if (!blog) {
      return res.status(404).send({
        message: "Blog not found!", 
      });
    }

  
    if (!title || !description || !req?.file?.path) {
      fs.unlinkSync(req?.file?.path); 
      return res.status(404).send({
          message: "Something went wrong!"
      });
  }

  
  // await sharp(req.file.path)
  // .resize({ width: 500 })   
  // .jpeg({ quality: 80 })   
  // .toFile(req.file.destination + '/op-' + req.file.originalname);

await Blog.update(
  { title, description, file:req.file.originalname},
  { where: { id } }
);


// fs.unlink(req.file.path, (err) => {
//   if (err) {
//       console.error('Failed to delete the uploaded image:', err);
//   } else {
//       console.log('Uploaded image deleted successfully.');
//   }
// });


fs.unlink(req.file.destination + '/' + blog.toJSON().file, (err) => {
  console.log('this is from console log' +'/' + blog.toJSON().file)
  console.log('this is from console log' + req.file.destination)
  if (err) {
      console.error('Failed to delete the old image:', err);
  } else {
      console.log('Old image deleted successfully.');
  }
});


    return res.send(blog);

  } catch (error) {
    next(error); 
  }
};

// Controller to delete a blog post
const deleteBlog = async (req, res, next) => {
  try {
    const { id } = req.params; 

    const singleBlog = await Blog.findOne({
      where: {
        id: id
      }
    });

    if (!singleBlog) {
      return res.status(404).send("Blog not found!"); 
    }

    await singleBlog.destroy();

    fs.unlink(path.join(__dirname, '..', '..', 'public', 'images','blog_img', singleBlog.file), (err) => {
      if (err) {
          console.error('Failed to delete the old image:', err);
      } else {
          console.log('Old image deleted successfully.');
      }
  });
    return res.status(200).send("Delete successfully");

  } catch (error) {
    next(error); 
  }
};

module.exports = { 
  blogController, 
  getBlogController, 
  getById, 
  deleteBlog, 
  updateBlogController 
}; 
