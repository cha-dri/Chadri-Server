import express from 'express';
const router = express.Router({ mergeParams: true });

import userRouter from './user/index.js'
import placeRouter from './places/index.js';
import courseRouter from './course/index.js';

router.use('/user', userRouter);
router.use('/places', placeRouter);
router.use('/course', courseRouter);


export default router;



