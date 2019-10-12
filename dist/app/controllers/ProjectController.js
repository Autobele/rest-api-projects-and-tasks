"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = store;
exports.index = index;

var _Project = _interopRequireDefault(require("../models/Project"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function store(_x, _x2) {
  return _store.apply(this, arguments);
}

function _store() {
  _store = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, name, priority, description, deliverydate, newProject;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, priority = _req$body.priority, description = _req$body.description, deliverydate = _req$body.deliverydate;
            _context.prev = 1;
            _context.next = 4;
            return _Project["default"].create({
              name: name,
              priority: priority,
              description: description,
              deliverydate: deliverydate
            });

          case 4:
            newProject = _context.sent;

            if (newProject) {
              res.json({
                message: 'Projeto criado com sucesso.',
                projects: projects
              });
            }

            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            res.status(400).json({
              error: _context.t0
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));
  return _store.apply(this, arguments);
}

function index(_x3, _x4) {
  return _index.apply(this, arguments);
}

function _index() {
  _index = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var projects;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Project["default"].findAll();

          case 2:
            projects = _context2.sent;
            res.json(projects);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _index.apply(this, arguments);
}