import express from 'express';
const router = express.Router({ mergeParams: true });
import CourseController from '../../../controllers/CourseController.js';

router.post('/', CourseController.postCourse);

export default router;