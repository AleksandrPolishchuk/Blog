import { Router } from "express";
import { checkAuth } from "../utils/checkAuth.js";
const router = new Router();

// Creaate Post
// http://localhost:3002/api/posts
router.post("/", checkAuth, createPost);

export default router;
