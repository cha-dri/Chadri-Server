import * as placeService from '../services/placeService.js';

export const getPlaces = async (req, res) => {
  try {
    const { lat, long } = req.query;
    if (!lat || !long) {
      let err = new Error('required value cannot be empty');
      err.status = 400;
      throw (err);
    }
    const places = await placeService.getPlaces({ lat, long });
    res.status(200).json({ data: places });
  } catch (err) {
    res.status(500).json({ error: 'get all places failed' });
  }
};

export const getPlacesFilteredCategory = async (req, res) => {
  try {
    const { lat, long } = req.query;
    if (!lat || !long) {
      let err = new Error('required value cannot be empty');
      err.status = 400;
      throw (err);
    }
    const category = req.params.filter;
    const places = await placeService.getPlaces({ lat, long }, category);
    res.status(200).json({ data: places });
  } catch (err) {
    res.status(err.status ?? 500).json({ error: err.message ?? 'get places filtered with category failed' });
  }
};
