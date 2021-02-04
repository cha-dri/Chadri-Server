"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _commentController = _interopRequireDefault(require("../../../controllers/commentController.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router({
  mergeParams: true
});

router.get('/', _commentController["default"].getComments);
router.post('/', _commentController["default"].postComment);
router.put('/:commentId', _commentController["default"].updateComment);
var _default = router;
exports["default"] = _default;