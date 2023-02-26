import { Router } from "express";
const router = new Router();
import { checkAuth } from "../utils/checkAuth.js";
import { createComment } from "../controllers/comments.js";

// Create Comment
// http://localhost:3002/api/comments/:id
router.podt("/:id", checkAuth, createComment);

export default router;
