import Place from '../models/place.js';

export const getPlaces = async (position, category = null) => {
  const where = category ? {
    category
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
  const places = await Place.fine({ _id: { $in: ids } });
  return places;
};
