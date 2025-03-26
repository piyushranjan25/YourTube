import express from 'express'
import { postComment, getComment, deleteComment, editComment } from '../Controllers/Comment.js'
import auth from '../Middleware/Auth.js'

const router = express.Router();

router.post("/post", auth, postComment);
router.get("/get", auth, getComment);
router.delete("/delete/:id", auth, deleteComment);
router.patch("/edit/:id", auth, editComment);

export default router;