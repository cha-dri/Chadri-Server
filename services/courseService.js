import Course from '../models/course.js';
import User from '../models/user.js';
import Place from '../models/place.js'
import {getById} from "../services/placeService.js";
import UserService from "../services/UserService.js"

async function postCourse(placeIds, userId, courseName) {
    const placesFromId = await getById(placeIds);
    const userFromId = await UserService.getUser(userId);
    const newCourse = await Course.create({
        title : courseName,
        description : "user description",
        author : userFromId,
        places : placesFromId,
        theme : "theme",
        rating : 10,
        like: 0
    })

    return newCourse;
  }

async function getCourse(courseid) {
    const foundCourse = await Course.findById(courseid).populate("author").populate("places");    
    return foundCourse;
}

async function getCourseLimit(num) {
    const foundCourse = await Course.find().populate("author").populate("places");    
    const shuffle = foundCourse.sort(() => 0.5 - Math.random());
    const courseRecommends = shuffle.slice(0,num);
    console.log(courseRecommends);
   
    return courseRecommends;
}

  export default {
      postCourse,
      getCourse,
      getCourseLimit
  }