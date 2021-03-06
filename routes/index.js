import express from 'express';
const router = express.Router();

import apiRouter from './api/index.js';

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('Hello, chadri. Server is running!');
});

router.use('/api', apiRouter);

export default router;
