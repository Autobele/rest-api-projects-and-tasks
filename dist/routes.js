"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _auth = _interopRequireDefault(require("./app/middlewares/auth"));

var _ProjectController = _interopRequireDefault(require("./app/controllers/ProjectController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
router.get('/projects', _auth["default"], _ProjectController["default"].index);
router.post('/projects', _auth["default"], _ProjectController["default"].store);
var _default = router;
exports["default"] = _default;