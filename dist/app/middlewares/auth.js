"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = hello;

function hello(req, res, next) {
  console.log('Hello');
  next();
}