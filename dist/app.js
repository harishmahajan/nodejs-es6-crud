"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _index = _interopRequireDefault(require("./routes/index"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _config = _interopRequireDefault(require("./config"));

var app = (0, _express.default)();
_mongoose.default.Promise = global.Promise;
var url = _config.default.db.url;

_mongoose.default.connect(url, {
  useNewUrlParser: true
}, function (err) {
  if (err) {
    console.log('Sorry can not connect with mongodb...');
  } else {
    console.log('Successfully connected mongodb...');
  }
});

app.use(_bodyParser.default.json({
  limit: '50mb'
}));
app.use(_bodyParser.default.urlencoded({
  limit: '50mb',
  extended: true,
  parameterLimit: 50000
}));

var enableCORS = function enableCORS(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, token, Content-Length, X-Requested-With, *');

  if ('OPTIONS' === req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
};

app.all("/*", function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, token, Content-Length, X-Requested-With, *');
  next();
});
app.use(enableCORS);
app.use((0, _morgan.default)('dev'));
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: false
}));
app.use((0, _cookieParser.default)());
app.use(_express.default.static(_path.default.join(__dirname, '../public')));
app.use('/', _index.default); // module.exports  mongoose;

var _default = app; // module.exports = {
//     mongoose:mongoose,
//     app:app
//   }

exports.default = _default;