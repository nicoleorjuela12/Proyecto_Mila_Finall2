import express from 'express';
import { CreateBlog, deleteBlog, getAllBlogs, getBlog, updateBlog } from '../controllers/BlogController.js';
const router = express.Router()

router.get('/', getAllBlogs)
router.get ('/:id', getBlog)
router.post('/',CreateBlog)
router.put('/:id', updateBlog)
router.delete ('/:id',deleteBlog)


export default router;