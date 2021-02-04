import express from 'express';
const router = express.Router({ mergeParams: true });
import UserController from '../../../controllers/UserController.js';

router.post("", UserController.postUser);
router.get("/:id", UserController.getUser);

export default router;