import express from 'express';
const router = express.Router({ mergeParams: true });
import CourseController from '../../../controllers/CourseController.js';

router.post('/', CourseController.postCourse);
router.get('/:courseid', CourseController.getCourse);
router.get('/recommend/:num', CourseController.getCourseLimit);
router.get('/:filter/:num', CourseController.getCourseFilterLimit);
router.post('/:courseid/review', CourseController.createReivew);

export default router;
