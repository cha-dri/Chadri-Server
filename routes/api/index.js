import express from 'express';
const router = express.Router({ mergeParams: true });
import userRouter from './user/index.js'
import placeRouter from './places/index.js';

router.use('/user', userRouter);
router.use('/places', placeRouter);

export default router;
