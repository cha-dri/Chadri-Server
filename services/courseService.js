import Course from '../models/course.js';
import { getPlaceByIds } from "../services/placeService.js";
import UserService from "../services/UserService.js"

async function postCourse(placeIds, userId, courseName) {
    const placesFromId = await getPlaceByIds(placeIds);
    const userFromId = await UserService.getUser(userId);
    const newCourse = await Course.create({
        title : courseName,
        author : userFromId,
        places : placesFromId,
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

async function getCourseFilterLimit(themeKeyword, num) {
    console.log("theme:", themeKeyword);
    const filterCourse = await Course.find({theme : themeKeyword}).populate("author").populate("places");    
    const shuffle = filterCourse.sort(() => 0.5 - Math.random());
    const courseFilter = shuffle.slice(0,num);
    console.log(courseFilter);
    return courseFilter;
}

async function getByUserId(userId) {
    const courses = await Course.find({ author: userId }).populate("author").populate("places");
    return courses;
}

async function createReivew(data) {
    const { id, ...val } = data;
    const tags = val.tag.split(',').map(tag => tag.trim());
    const result = await Course.updateOne(
        {
          _id: id,
        },
        {
            isDone: true,
            description: val.comment,
            rating: val.rating,
            tag: tags,
        }
      );
      return result;
}

  export default {
      postCourse,
      getCourse,
      getCourseLimit,
      getCourseFilterLimit,
      getByUserId,
      createReivew,
  }
