import express from 'express';
const router = express.Router();
import placeRouter from './places/index.js';

router.use('/places', placeRouter);

export default router;
