"use strict";

var _app = _interopRequireDefault(require("./app"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

_app["default"].listen(process.env.PORT, function (err) {
  if (err) throw err;
  console.log("Server running succesfully in port ".concat(process.env.PORT));
});