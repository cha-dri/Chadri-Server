import express from 'express';
const router = express.Router();

import * as placeCtrl from '../../../controllers/placeController.js';

router.get('/', placeCtrl.getPlaces);
router.get('/:filter', placeCtrl.getPlacesFilteredCategory);

export default router;
