"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _config = _interopRequireDefault(require("../config"));

var _responseHelper = _interopRequireDefault(require("../helpers/responseHelper"));

var _messageParser = _interopRequireDefault(require("../helpers/messageParser"));

var user = _interopRequireWildcard(require("../controller/userController.js"));

// import department from '../controller/departmentController';
var apiRoutes = _express.default.Router();

var router = _express.default.Router();

router.get('/listUser', user.listUser);
var _default = router;
exports.default = _default;