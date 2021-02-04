import express from 'express';
const router = express.Router({ mergeParams: true });
import CourseController from '../../../controllers/CourseController.js';

router.post('/', CourseController.postCourse);
router.get('/:courseId', CourseController.getCourse);

export default router;