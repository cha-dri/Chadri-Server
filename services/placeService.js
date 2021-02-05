import Place from '../models/place.js';

const categories = {
  'tree': '가로수길',
  'history': '향토문화유적',
  'forest': '휴양림',
  'tour': '관광지',
};

export const getPlaces = async (position, category = null) => {
  const where = category ? {
    category: categories[category],
  } : {};
  const places = await Place.find( {
    ...where,
    latitude: {
      $gt: position.lat - 0.3,
      $lt: position.lat + 0.3,
    },
    longitude: {
      $gt: position.long - 0.3,
      $lt: position.long + 0.3,
    },
  });
  return places;
};

export const getById = async (ids) => {
  const places = await Place.find({ _id: ids });
  return places;
};
