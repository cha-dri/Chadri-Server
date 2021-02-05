import Course from '../models/course.js';
import { getPlaceByIds } from "../services/placeService.js";
import UserService from "../services/UserService.js"

async function postCourse(placeIds, userId, courseName) {
    const placesFromId = await getPlaceByIds(placeIds);
    const { latitude, longitude } = placesFromId[0];
    
    const userFromId = await UserService.getUser(userId);
    const newCourse = await Course.create({
        title : courseName,
        author : userFromId,
        places : placesFromId,
        latitude : latitude,
        longitude : longitude
    })
    return newCourse;
}

async function getCourse(courseid) {
    const foundCourse = await Course.findById(courseid).populate("author").populate("places");    
    return foundCourse;
}

async function getCourseRecommnedLimit(num, lat, long) {
    const foundCourse = await Course.find({
        latitude: {
            $gt: Number(lat) - 0.6,
            $lt: Number(lat) + 0.6,
        },
        longitude: {
            $gt: Number(long) - 0.6,
            $lt: Number(long) + 0.6,
      }
    }).populate("author").populate("places");    
    const shuffle = foundCourse.sort(() => 0.5 - Math.random());
    const courseRecommends = shuffle.slice(0,num);
    console.log(courseRecommends);
    return courseRecommends;
}

async function getCourseByTagLimit(tag, num) {
    console.log("theme:", tag);
    const filterCourse = await Course.find({tag : tag}).populate("author").populate("places");    
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
      getCourseRecommnedLimit,
      getCourseByTagLimit,
      getByUserId,
      createReivew,
  }