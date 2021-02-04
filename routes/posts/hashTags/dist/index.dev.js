"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _hashtagController = _interopRequireDefault(require("../../../controllers/hashtagController.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/', _hashtagController["default"].getHashTags);
router.get('/:hashTagId', _hashtagController["default"].getHashTag);
router.post('/', _hashtagController["default"].addHashTag);
router.put('/:hashTagId', _hashtagController["default"].updateHashTag);
router["delete"]('/:hashTagId', _hashtagController["default"].deleteHashTag);
var _default = router;
exports["default"] = _default;