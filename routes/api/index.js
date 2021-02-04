import express from 'express';
const router = express.Router({ mergeParams: true });
import userRouter from './user/index.js'

router.use('/user', userRouter);

export default router;
