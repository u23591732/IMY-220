"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
require("regenerator-runtime/runtime");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var express = require("express");
var app = express();
app.use(express["static"]("frontend/public"));
var _require = require("mongodb"),
  MongoClient = _require.MongoClient;
var uri = "mongodb+srv://IMYuser:Eduplex2023@cluster0.1zrlw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
var client = new MongoClient(uri);
var Users = require('../Users');
var Songs = require('../Songs');
var Playlists = require('../Playlists');
var Comments = require('../Comments');
var SongList = require('../SongLists');
app.listen(1337, /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
  return _regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.next = 2;
        return connectToDatabase();
      case 2:
        console.log("Listening on localhost:1337");
      case 3:
      case "end":
        return _context.stop();
    }
  }, _callee);
})));
var playlists;
var users;
var comments;
var songs;
var songlists;
app.use(express.json());

// Connect to MongoDB and initialize the Players class
function connectToDatabase() {
  return _connectToDatabase.apply(this, arguments);
} // *******************User routes************************************
function _connectToDatabase() {
  _connectToDatabase = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee29() {
    var db;
    return _regeneratorRuntime().wrap(function _callee29$(_context29) {
      while (1) switch (_context29.prev = _context29.next) {
        case 0:
          _context29.prev = 0;
          _context29.next = 3;
          return client.connect();
        case 3:
          db = client.db('LoopDB');
          users = new Users(db);
          comments = new Comments(db);
          playlists = new Playlists(db);
          songs = new Songs(db);
          songlists = new SongList(db);
          console.log('Access to Users collection');
          _context29.next = 15;
          break;
        case 12:
          _context29.prev = 12;
          _context29.t0 = _context29["catch"](0);
          console.error('Error connecting to MongoDB:', _context29.t0);
        case 15:
        case "end":
          return _context29.stop();
      }
    }, _callee29, null, [[0, 12]]);
  }));
  return _connectToDatabase.apply(this, arguments);
}
app.post('/addUser', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var userId;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return users.insertUser(req.body.userData);
        case 3:
          userId = _context2.sent;
          res.status(201).send({
            message: 'User successfully inserted',
            id: userId
          });
          console.log('User successfully inserted with ID: ' + userId);
          _context2.next = 11;
          break;
        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          res.status(500).send({
            error: _context2.t0.message
          });
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return function (_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}());

// Route to get a user by ID
app.get('/user/:id', /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var user;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return users.findUserById(req.params.id);
        case 3:
          user = _context3.sent;
          if (user) {
            res.status(200).send(user);
          } else {
            res.status(404).send({
              error: 'User not found'
            });
          }
          _context3.next = 10;
          break;
        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          res.status(500).send({
            error: _context3.t0.message
          });
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return function (_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}());

// Route to get a user by userName
app.get('/username/:name', /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var user;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return users.findUserByName(req.params.name);
        case 3:
          user = _context4.sent;
          if (user) {
            res.status(200).send(user);
          } else {
            res.status(404).send({
              error: 'User not found'
            });
          }
          _context4.next = 10;
          break;
        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          res.status(500).send({
            error: _context4.t0.message
          });
        case 10:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 7]]);
  }));
  return function (_x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}());

// Route to update a user's details
app.put('/users/:id', /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var updated;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return users.updateUser(req.params.id, req.body.userData);
        case 3:
          updated = _context5.sent;
          if (updated) {
            res.status(200).send({
              message: 'User successfully details updated'
            });
          } else {
            res.status(404).send({
              error: 'User not found'
            });
          }
          _context5.next = 10;
          break;
        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          res.status(500).send({
            error: _context5.t0.message
          });
        case 10:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 7]]);
  }));
  return function (_x7, _x8) {
    return _ref5.apply(this, arguments);
  };
}());

// Route to delete a user
app["delete"]('/users/:id', /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var deleted;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return users.deleteUser(req.params.id);
        case 3:
          deleted = _context6.sent;
          if (deleted) {
            res.status(200).send({
              message: 'User successfully deleted'
            });
          } else {
            res.status(404).send({
              error: 'User not found'
            });
          }
          _context6.next = 10;
          break;
        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          res.status(500).send({
            error: _context6.t0.message
          });
        case 10:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 7]]);
  }));
  return function (_x9, _x10) {
    return _ref6.apply(this, arguments);
  };
}());

//*******************Song routes************************************
// Route to insert a new song
app.post('/addSong', /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var songId;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return songs.insertSong(req.body.songData);
        case 3:
          songId = _context7.sent;
          res.status(201).send({
            message: 'Song successfully inserted',
            id: songId
          });
          console.log('Song successfully inserted with ID: ' + songId);
          _context7.next = 11;
          break;
        case 8:
          _context7.prev = 8;
          _context7.t0 = _context7["catch"](0);
          res.status(500).send({
            error: _context7.t0.message
          });
        case 11:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 8]]);
  }));
  return function (_x11, _x12) {
    return _ref7.apply(this, arguments);
  };
}());

// Route to get a song by ID
app.get('/song/:id', /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var song;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return songs.findSongById(req.params.id);
        case 3:
          song = _context8.sent;
          if (song) {
            res.status(200).send(song);
          } else {
            res.status(404).send({
              error: 'Song not found'
            });
          }
          _context8.next = 10;
          break;
        case 7:
          _context8.prev = 7;
          _context8.t0 = _context8["catch"](0);
          res.status(500).send({
            error: _context8.t0.message
          });
        case 10:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 7]]);
  }));
  return function (_x13, _x14) {
    return _ref8.apply(this, arguments);
  };
}());

// Route to get a song by title
app.get('/songTitle/:title', /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var song;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return songs.findSongByTitle(req.params.title);
        case 3:
          song = _context9.sent;
          if (song) {
            res.status(200).send(song);
          } else {
            res.status(404).send({
              error: 'Song not found'
            });
          }
          _context9.next = 10;
          break;
        case 7:
          _context9.prev = 7;
          _context9.t0 = _context9["catch"](0);
          res.status(500).send({
            error: _context9.t0.message
          });
        case 10:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 7]]);
  }));
  return function (_x15, _x16) {
    return _ref9.apply(this, arguments);
  };
}());

// Route to get a song by spotify link

app.post('/songLink', /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var song;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return songs.findSongByLink(req.body.link);
        case 3:
          song = _context10.sent;
          if (song) {
            res.status(200).send(song);
          } else {
            res.status(404).send({
              error: 'Song not found'
            });
          }
          _context10.next = 10;
          break;
        case 7:
          _context10.prev = 7;
          _context10.t0 = _context10["catch"](0);
          res.status(500).send({
            error: _context10.t0.message
          });
        case 10:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 7]]);
  }));
  return function (_x17, _x18) {
    return _ref10.apply(this, arguments);
  };
}());

/* 66f3f25e6e5551813edf1075  jtshanbalal63 
Songs 
    66f3e0756e5551813edf1067 
    66f3e0756e5551813edf1068
    66f3e0756e5551813edf106b
   66f3f25e6e5551813edf1076  tomtheguy16
   66f3f25e6e5551813edf1077   susanheartsmusic
   66f3f25e6e5551813edf1078    1a1a1and
   66f3e0756e5551813edf1069


  66f3e0756e5551813edf106e
   66f3e0756e5551813edf106d



*/

// Route to delete a song
app["delete"]('/songs/:id', /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var deleted;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _context11.next = 3;
          return songs.deleteSong(req.params.id);
        case 3:
          deleted = _context11.sent;
          if (deleted) {
            res.status(200).send({
              message: 'Song successfully deleted'
            });
          } else {
            res.status(404).send({
              error: 'Song not found'
            });
          }
          _context11.next = 10;
          break;
        case 7:
          _context11.prev = 7;
          _context11.t0 = _context11["catch"](0);
          res.status(500).send({
            error: _context11.t0.message
          });
        case 10:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 7]]);
  }));
  return function (_x19, _x20) {
    return _ref11.apply(this, arguments);
  };
}());

//*******************Playlist routes************************************
// Route to insert a new playlist
app.post('/addPlay', /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var playId;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;
          _context12.next = 3;
          return playlists.insertPlay(req.body.playData);
        case 3:
          playId = _context12.sent;
          res.status(201).send({
            message: 'Playlist successfully created',
            id: playId
          });
          console.log('Playlist successfully inserted with ID: ' + playId);
          _context12.next = 11;
          break;
        case 8:
          _context12.prev = 8;
          _context12.t0 = _context12["catch"](0);
          res.status(500).send({
            error: _context12.t0.message
          });
        case 11:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[0, 8]]);
  }));
  return function (_x21, _x22) {
    return _ref12.apply(this, arguments);
  };
}());

// Route to get a playlist by ID
app.get('/playlist/:id', /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var player;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          _context13.next = 3;
          return playlists.findPlayById(req.params.id);
        case 3:
          player = _context13.sent;
          if (player) {
            res.status(200).send(player);
          } else {
            res.status(404).send({
              error: 'Playlist not found'
            });
          }
          _context13.next = 10;
          break;
        case 7:
          _context13.prev = 7;
          _context13.t0 = _context13["catch"](0);
          res.status(500).send({
            error: _context13.t0.message
          });
        case 10:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[0, 7]]);
  }));
  return function (_x23, _x24) {
    return _ref13.apply(this, arguments);
  };
}());

// Route to get a playlist by name

app.get('/playlistName/:playName', /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
    var play;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.prev = 0;
          _context14.next = 3;
          return playlists.findPlayByName(req.params.playName);
        case 3:
          play = _context14.sent;
          if (play) {
            res.status(200).send(play);
          } else {
            res.status(404).send({
              error: 'Playlist not found'
            });
          }
          _context14.next = 10;
          break;
        case 7:
          _context14.prev = 7;
          _context14.t0 = _context14["catch"](0);
          res.status(500).send({
            error: _context14.t0.message
          });
        case 10:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[0, 7]]);
  }));
  return function (_x25, _x26) {
    return _ref14.apply(this, arguments);
  };
}());

// Route to get a playlist by username
app.get('/playlistUser/:userName', /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res) {
    var play;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _context15.prev = 0;
          _context15.next = 3;
          return playlists.findPlayByUserName(req.params.userName);
        case 3:
          play = _context15.sent;
          if (play) {
            res.status(200).send(play);
          } else {
            res.status(404).send({
              error: 'Playlist not found'
            });
          }
          _context15.next = 10;
          break;
        case 7:
          _context15.prev = 7;
          _context15.t0 = _context15["catch"](0);
          res.status(500).send({
            error: _context15.t0.message
          });
        case 10:
        case "end":
          return _context15.stop();
      }
    }, _callee15, null, [[0, 7]]);
  }));
  return function (_x27, _x28) {
    return _ref15.apply(this, arguments);
  };
}());

// Route to get a playlist by userID
app.get('/playlistUserID/:userID', /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16(req, res) {
    var player;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          _context16.prev = 0;
          _context16.next = 3;
          return playlists.findPlayByUserID(req.params.userID);
        case 3:
          player = _context16.sent;
          if (player) {
            res.status(200).send(player);
          } else {
            res.status(404).send({
              error: 'Playlist not found'
            });
          }
          _context16.next = 10;
          break;
        case 7:
          _context16.prev = 7;
          _context16.t0 = _context16["catch"](0);
          res.status(500).send({
            error: _context16.t0.message
          });
        case 10:
        case "end":
          return _context16.stop();
      }
    }, _callee16, null, [[0, 7]]);
  }));
  return function (_x29, _x30) {
    return _ref16.apply(this, arguments);
  };
}());

// Route to get a playlist by genre
app.get('/playlistGenre/:genre', /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17(req, res) {
    var player;
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          _context17.prev = 0;
          _context17.next = 3;
          return playlists.findPlayByGenre(req.params.genre);
        case 3:
          player = _context17.sent;
          if (player) {
            res.status(200).send(player);
          } else {
            res.status(404).send({
              error: 'Playlist not found'
            });
          }
          _context17.next = 10;
          break;
        case 7:
          _context17.prev = 7;
          _context17.t0 = _context17["catch"](0);
          res.status(500).send({
            error: _context17.t0.message
          });
        case 10:
        case "end":
          return _context17.stop();
      }
    }, _callee17, null, [[0, 7]]);
  }));
  return function (_x31, _x32) {
    return _ref17.apply(this, arguments);
  };
}());

// Route to get a playlist by tags
app.post('/playlistTags', /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18(req, res) {
    var tags, player;
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          _context18.prev = 0;
          tags = req.body.tags; // Ensure 'tags' is an array
          if (Array.isArray(tags)) {
            _context18.next = 4;
            break;
          }
          throw new Error('Tags should be an array');
        case 4:
          _context18.next = 6;
          return playlists.findPlayByTags(tags);
        case 6:
          player = _context18.sent;
          if (player) {
            res.status(200).send(player);
          } else {
            res.status(404).send({
              error: 'No matching playlists found'
            });
          }
          _context18.next = 13;
          break;
        case 10:
          _context18.prev = 10;
          _context18.t0 = _context18["catch"](0);
          res.status(500).send({
            error: _context18.t0.message
          });
        case 13:
        case "end":
          return _context18.stop();
      }
    }, _callee18, null, [[0, 10]]);
  }));
  return function (_x33, _x34) {
    return _ref18.apply(this, arguments);
  };
}());

// Route to update a playlists details
app.put('/playlists/:id', /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee19(req, res) {
    var updated;
    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          _context19.prev = 0;
          _context19.next = 3;
          return playlists.updatePlay(req.params.id, req.body.playData);
        case 3:
          updated = _context19.sent;
          if (updated) {
            res.status(200).send({
              message: 'Playlist details successfully updated'
            });
          } else {
            res.status(404).send({
              error: 'Playlist not found'
            });
          }
          _context19.next = 10;
          break;
        case 7:
          _context19.prev = 7;
          _context19.t0 = _context19["catch"](0);
          res.status(500).send({
            error: _context19.t0.message
          });
        case 10:
        case "end":
          return _context19.stop();
      }
    }, _callee19, null, [[0, 7]]);
  }));
  return function (_x35, _x36) {
    return _ref19.apply(this, arguments);
  };
}());

// Route to delete a playlist
app["delete"]('/playlists/:id', /*#__PURE__*/function () {
  var _ref20 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee20(req, res) {
    var deleted;
    return _regeneratorRuntime().wrap(function _callee20$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          _context20.prev = 0;
          _context20.next = 3;
          return playlists.deletePlay(req.params.id);
        case 3:
          deleted = _context20.sent;
          if (deleted) {
            res.status(200).send({
              message: 'Playlist successfully deleted'
            });
          } else {
            res.status(404).send({
              error: 'Playlist not found'
            });
          }
          _context20.next = 10;
          break;
        case 7:
          _context20.prev = 7;
          _context20.t0 = _context20["catch"](0);
          res.status(500).send({
            error: _context20.t0.message
          });
        case 10:
        case "end":
          return _context20.stop();
      }
    }, _callee20, null, [[0, 7]]);
  }));
  return function (_x37, _x38) {
    return _ref20.apply(this, arguments);
  };
}());

//*******************Comment routes************************************
// Route to insert by comment
app.post('/addComment', /*#__PURE__*/function () {
  var _ref21 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee21(req, res) {
    var commId;
    return _regeneratorRuntime().wrap(function _callee21$(_context21) {
      while (1) switch (_context21.prev = _context21.next) {
        case 0:
          _context21.prev = 0;
          _context21.next = 3;
          return comments.insertComment(req.body.commData);
        case 3:
          commId = _context21.sent;
          res.status(201).send({
            message: 'Comment successfully added',
            id: commId
          });
          console.log('Comment successfully inserted with ID: ' + commId);
          _context21.next = 11;
          break;
        case 8:
          _context21.prev = 8;
          _context21.t0 = _context21["catch"](0);
          res.status(500).send({
            error: _context21.t0.message
          });
        case 11:
        case "end":
          return _context21.stop();
      }
    }, _callee21, null, [[0, 8]]);
  }));
  return function (_x39, _x40) {
    return _ref21.apply(this, arguments);
  };
}());

// Route to get a comment by ID
app.get('/comment/:id', /*#__PURE__*/function () {
  var _ref22 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee22(req, res) {
    var comm;
    return _regeneratorRuntime().wrap(function _callee22$(_context22) {
      while (1) switch (_context22.prev = _context22.next) {
        case 0:
          _context22.prev = 0;
          _context22.next = 3;
          return comments.findCommentById(req.params.id);
        case 3:
          comm = _context22.sent;
          if (comm) {
            res.status(200).send(comm);
          } else {
            res.status(404).send({
              error: 'Comment not found'
            });
          }
          _context22.next = 10;
          break;
        case 7:
          _context22.prev = 7;
          _context22.t0 = _context22["catch"](0);
          res.status(500).send({
            error: _context22.t0.message
          });
        case 10:
        case "end":
          return _context22.stop();
      }
    }, _callee22, null, [[0, 7]]);
  }));
  return function (_x41, _x42) {
    return _ref22.apply(this, arguments);
  };
}());

// Route to get a comment by playlistID
app.get('/commentPlay/:playId', /*#__PURE__*/function () {
  var _ref23 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee23(req, res) {
    var comm;
    return _regeneratorRuntime().wrap(function _callee23$(_context23) {
      while (1) switch (_context23.prev = _context23.next) {
        case 0:
          _context23.prev = 0;
          _context23.next = 3;
          return comments.findCommentByPlayId(req.params.playId);
        case 3:
          comm = _context23.sent;
          if (comm) {
            res.status(200).send(comm);
          } else {
            res.status(404).send({
              error: 'Comment not found'
            });
          }
          _context23.next = 10;
          break;
        case 7:
          _context23.prev = 7;
          _context23.t0 = _context23["catch"](0);
          res.status(500).send({
            error: _context23.t0.message
          });
        case 10:
        case "end":
          return _context23.stop();
      }
    }, _callee23, null, [[0, 7]]);
  }));
  return function (_x43, _x44) {
    return _ref23.apply(this, arguments);
  };
}());
app.put('/comment/:id', /*#__PURE__*/function () {
  var _ref24 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee24(req, res) {
    var updated;
    return _regeneratorRuntime().wrap(function _callee24$(_context24) {
      while (1) switch (_context24.prev = _context24.next) {
        case 0:
          _context24.prev = 0;
          _context24.next = 3;
          return comments.updateComment(req.params.id, req.body.commData);
        case 3:
          updated = _context24.sent;
          if (updated) {
            res.status(200).send({
              message: 'Comment successfully updated'
            });
          } else {
            res.status(404).send({
              error: 'Comment not found'
            });
          }
          _context24.next = 10;
          break;
        case 7:
          _context24.prev = 7;
          _context24.t0 = _context24["catch"](0);
          res.status(500).send({
            error: _context24.t0.message
          });
        case 10:
        case "end":
          return _context24.stop();
      }
    }, _callee24, null, [[0, 7]]);
  }));
  return function (_x45, _x46) {
    return _ref24.apply(this, arguments);
  };
}());
app["delete"]('/comment/:id', /*#__PURE__*/function () {
  var _ref25 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee25(req, res) {
    var deleted;
    return _regeneratorRuntime().wrap(function _callee25$(_context25) {
      while (1) switch (_context25.prev = _context25.next) {
        case 0:
          _context25.prev = 0;
          _context25.next = 3;
          return comments.deleteComment(req.params.id);
        case 3:
          deleted = _context25.sent;
          if (deleted) {
            res.status(200).send({
              message: 'Comment successfully deleted'
            });
          } else {
            res.status(404).send({
              error: 'Comment not found'
            });
          }
          _context25.next = 10;
          break;
        case 7:
          _context25.prev = 7;
          _context25.t0 = _context25["catch"](0);
          res.status(500).send({
            error: _context25.t0.message
          });
        case 10:
        case "end":
          return _context25.stop();
      }
    }, _callee25, null, [[0, 7]]);
  }));
  return function (_x47, _x48) {
    return _ref25.apply(this, arguments);
  };
}());
app.post('/user/:id/addSong', /*#__PURE__*/function () {
  var _ref26 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee26(req, res) {
    var userID, songID, result;
    return _regeneratorRuntime().wrap(function _callee26$(_context26) {
      while (1) switch (_context26.prev = _context26.next) {
        case 0:
          userID = req.params.id;
          songID = req.body.songID;
          _context26.prev = 2;
          _context26.next = 5;
          return songlists.addSongToUserList(userID, songID);
        case 5:
          result = _context26.sent;
          res.status(200).send(result);
          _context26.next = 12;
          break;
        case 9:
          _context26.prev = 9;
          _context26.t0 = _context26["catch"](2);
          res.status(500).send({
            error: _context26.t0.message
          });
        case 12:
        case "end":
          return _context26.stop();
      }
    }, _callee26, null, [[2, 9]]);
  }));
  return function (_x49, _x50) {
    return _ref26.apply(this, arguments);
  };
}());
app.get('/user/songList/:id', /*#__PURE__*/function () {
  var _ref27 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee27(req, res) {
    var userID, songList;
    return _regeneratorRuntime().wrap(function _callee27$(_context27) {
      while (1) switch (_context27.prev = _context27.next) {
        case 0:
          userID = req.params.id;
          _context27.prev = 1;
          _context27.next = 4;
          return songlists.getUserSongList(userID);
        case 4:
          songList = _context27.sent;
          res.status(200).send({
            songs: songList.songs
          });
          _context27.next = 11;
          break;
        case 8:
          _context27.prev = 8;
          _context27.t0 = _context27["catch"](1);
          res.status(500).send({
            error: _context27.t0.message
          });
        case 11:
        case "end":
          return _context27.stop();
      }
    }, _callee27, null, [[1, 8]]);
  }));
  return function (_x51, _x52) {
    return _ref27.apply(this, arguments);
  };
}());
app.get('/search', /*#__PURE__*/function () {
  var _ref28 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee28(req, res) {
    var query, results;
    return _regeneratorRuntime().wrap(function _callee28$(_context28) {
      while (1) switch (_context28.prev = _context28.next) {
        case 0:
          query = req.query.q;
          _context28.prev = 1;
          _context28.next = 4;
          return searchAcrossCollections(query);
        case 4:
          results = _context28.sent;
          res.status(200).send(results);
          _context28.next = 11;
          break;
        case 8:
          _context28.prev = 8;
          _context28.t0 = _context28["catch"](1);
          res.status(500).send({
            error: _context28.t0.message
          });
        case 11:
        case "end":
          return _context28.stop();
      }
    }, _callee28, null, [[1, 8]]);
  }));
  return function (_x53, _x54) {
    return _ref28.apply(this, arguments);
  };
}());
function searchAcrossCollections(_x55) {
  return _searchAcrossCollections.apply(this, arguments);
}
function _searchAcrossCollections() {
  _searchAcrossCollections = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee30(query) {
    var songResults, userResults, playlistResults;
    return _regeneratorRuntime().wrap(function _callee30$(_context30) {
      while (1) switch (_context30.prev = _context30.next) {
        case 0:
          _context30.next = 2;
          return songs.collection.find({
            $or: [{
              songTitle: {
                $regex: query,
                $options: 'i'
              }
            }, {
              songArtist: {
                $regex: query,
                $options: 'i'
              }
            }]
          }).toArray();
        case 2:
          songResults = _context30.sent;
          _context30.next = 5;
          return users.collection.find({
            $or: [{
              userName: {
                $regex: query,
                $options: 'i'
              }
            }, {
              fullName: {
                $regex: query,
                $options: 'i'
              }
            }]
          }).toArray();
        case 5:
          userResults = _context30.sent;
          _context30.next = 8;
          return playlists.collection.find({
            playName: {
              $regex: query,
              $options: 'i'
            }
          }, {
            playGenre: {
              $regex: query,
              $options: 'i'
            }
          }).toArray();
        case 8:
          playlistResults = _context30.sent;
          return _context30.abrupt("return", {
            songs: songResults,
            users: userResults,
            playlists: playlistResults
          });
        case 10:
        case "end":
          return _context30.stop();
      }
    }, _callee30);
  }));
  return _searchAcrossCollections.apply(this, arguments);
}