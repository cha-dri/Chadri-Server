import UserService from '../services/UserService.js'
import CourseService from '../services/courseService.js'

async function postUser (req, res) {
  console.log(req);
  try {
    const { nickname } = req.body;
    const newUser = await UserService.createUser(nickname);
    res.status(200).json({
      data: newUser
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ 
      data: 'internal server err'
    });
  }
}

async function getUser (req, res) {
  console.log(req);
  try {
    const { id } = req.params;
    console.log(id);
    const foundUser = await UserService.getUser(id);
    res.status(200).json({
      result: foundUser
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ 
      result: 'internal server err'
    });
  }
}

async function getUserCourses (req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      let err = new Error('required value cannot be empty');
      err.status = 400;
      throw (err);
    }
    const courses = await CourseService.getByUserId(id);
    res.status(200).json({
      data: courses
    });
  } catch (err) {
    res.status(err.status ?? 500).json({
      error: err.message ?? 'internal server err'
    });
  }
}

export default {
  postUser,
  getUser,
  getUserCourses,
}

