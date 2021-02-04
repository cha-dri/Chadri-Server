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

export default {
  postCourse
}

