import CourseService from '../services/courseService.js'

async function postCourse (req, res) {
  try {
    const { userid, coursename } = req.body;
    const placeids = req.body.placeids;
    const placeIdArray = placeids.split(",");
    const newCourse = await CourseService.postCourse(placeIdArray, userid, coursename);
    res.status(200).json({
      result: newCourse
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ 
      data: 'internal server err'
    });
  }
}

async function getCourse (req, res) {
    try {
      const { courseid } = req.params;
      const foundCourse = await CourseService.getCourse(courseid);
      res.status(200).json({
        result: foundCourse
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ 
        data: 'internal server err'
      });
    }
  }

  async function getCourseLimit (req, res) {
    try {
      const { num } = req.params;
      const {lat, long} = req.query;
      const recCourse = await CourseService.getCourseRecommnedLimit(num, lat, long);
      res.status(200).json({
        result: recCourse
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ 
        data: 'internal server err'
      });
    }
  }

  async function getCoursebyTagLimit (req, res) {
    try {
      const { num, tag } = req.params;
      const filterCourse = await CourseService.getCourseByTagLimit(tag, num);
      res.status(200).json({
        result: filterCourse
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ 
        data: 'internal server err'
      });
    }
  }

  async function createReivew (req, res) {
    try {
      const { courseid } = req.params;
      const { comment, rating, tag } = req.body;
      const result = await CourseService.createReivew({ id: courseid, comment, rating, tag });
      if (!result.n) {
        res.json({
          message: 'course not found'
        });
      }
      res.json({
        message: 'review added'
      });  
    } catch (err) {
      res.status(err.status ?? 500).json({ error: err.message ?? 'add review failed' });
    }
  }


export default {
  postCourse,
  getCourse,
  getCourseLimit,
  getCoursebyTagLimit,
  createReivew,
}
