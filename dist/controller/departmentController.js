"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var mongoose = require("mongoose");

var responseHelper = require("../helpers/responseHelper");

var messageParser = require("../helpers/messageParser");

var departmentModel = mongoose.model("departmentModel");
/** To add department
 * 	POST http://localhost:1810/api/Department
    {
        "DepartmentName":"Hardware",
        "AddedBy":"userid"
    }
    In headers we have to pass token, like below.
    "authorization":"pass the token here"
*/

exports.createDepartment =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(req, res) {
    var requestdata;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (req.body.AddedBy) {
              _context.next = 4;
              break;
            }

            res.json(responseHelper.ErrorResponse(401, messageParser.useridrequired, 'error'));
            _context.next = 14;
            break;

          case 4:
            requestdata = new departmentModel();
            requestdata.DepartmentName = req.body.DepartmentName;
            requestdata.AddDate = Date.now();
            requestdata.AddedBy = req.body.AddedBy;
            _context.t0 = departmentModel;
            _context.t1 = {
              "DepartmentName": req.body.DepartmentName
            };
            _context.next = 12;
            return function (error, response) {
              if (response != null) res.json(responseHelper.SuccessResponse(200, messageParser.alertmessage['tblDepartment'].alreadyregistered, null));else {
                departmentModel.create(requestdata, function (error, success) {
                  if (error) res.json(responseHelper.ErrorResponse(401, messageParser.alertmessage['tblDepartment'].createerror, error));else res.json(responseHelper.SuccessResponse(200, messageParser.alertmessage['tblDepartment'].createsuccess, success));
                });
              }
            };

          case 12:
            _context.t2 = _context.sent;

            _context.t0.findOne.call(_context.t0, _context.t1, _context.t2);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
/* To update department
 * PUT http://localhost:1810/api/Department
 * {
	"_id":"5b6c122c294b99d01ac0aab2",
	"DepartmentName":"Hardware En",
	"UpdatedBy":"userid"
    }
    In headers we have to pass token, like below.
    "authorization":"pass the token here"
 */


exports.updateDepartment =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(req, res) {
    var requestdata;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!req.body.UpdatedBy) res.json(responseHelper.ErrorResponse(401, messageParser.useridrequired, 'error'));

            if (req.body._id) {
              _context2.next = 5;
              break;
            }

            res.json(responseHelper.ErrorResponse(401, messageParser.useridrequired, 'error'));
            _context2.next = 14;
            break;

          case 5:
            requestdata = {
              DepartmentName: req.body.DepartmentName,
              UpdateDate: Date.now(),
              UpdatedBy: req.body.UpdatedBy
            };
            _context2.t0 = departmentModel;
            _context2.t1 = {
              _id: req.body._id
            };
            _context2.t2 = {
              $set: requestdata
            };
            _context2.t3 = {
              upsert: true
            };
            _context2.next = 12;
            return function (error, success) {
              if (error) res.json(responseHelper.ErrorResponse(401, messageParser.alertmessage['tblDepartment'].updateerror, error));else res.json(responseHelper.SuccessResponse(200, messageParser.alertmessage['tblDepartment'].updatesuccess, success));
            };

          case 12:
            _context2.t4 = _context2.sent;

            _context2.t0.update.call(_context2.t0, _context2.t1, _context2.t2, _context2.t3, _context2.t4);

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
/* To remove department
 * Delete  http://localhost:1810/api/Department?_id=5b6a8e49206b40c015621482&UpdatedBy=USERID-SHOULD-HERE
 * In headers we have to pass token, like below.
    "authorization":"pass the token here"
 */


exports.deleteDepartment =
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee3(req, res) {
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (req.query._id) {
              _context3.next = 4;
              break;
            }

            res.json(responseHelper.ErrorResponse(401, messageParser.useridrequired, 'error'));
            _context3.next = 10;
            break;

          case 4:
            _context3.t0 = departmentModel;
            _context3.t1 = {
              _id: req.query._id
            };
            _context3.next = 8;
            return function (err, response) {
              if (err) res.json(responseHelper.ErrorResponse(403, messageParser.alertmessage['tblDepartment'].idnotfound, err));else {
                var requestdata = {
                  IsActive: !response.IsActive,
                  UpdateDate: Date.now(),
                  Updatedby: req.query.Updatedby
                };
                departmentModel.update({
                  _id: req.query._id
                }, {
                  $set: requestdata
                }, {
                  upsert: true
                }, function (error, result) {
                  if (error) res.json(responseHelper.ErrorResponse(403, messageParser.alertmessage['tblDepartment'].idnotfound, error));else res.json(responseHelper.SuccessResponse(200, messageParser.alertmessage['tblDepartment'].updatesuccess, result));
                });
              }
            };

          case 8:
            _context3.t2 = _context3.sent;

            _context3.t0.findOne.call(_context3.t0, _context3.t1, _context3.t2);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
/** To get the list of departments. 
 *  POST http://localhost:8000/api/departmentList
 *  
    1)
    {
        "params": {},
        "page": 1,
        "pageSize": 10
    }
    In headers we have to pass token, like below.
    "authorization":"pass the token here"

    2) 
    {
        "params": {},
        "page": 2,
        "pageSize": 10
    }
    In headers we have to pass token, like below.
    "authorization":"pass the token here"
    
    3) If you did not pass page and pageSize then it will dispaly 10 records
 */


exports.listDepartment =
/*#__PURE__*/
function () {
  var _ref4 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee4(req, res) {
    var query, pageSize, page, totalCount;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            query = req.body.params;
            pageSize = req.body.pageSize;
            page = req.body.page;
            totalCount = 0;
            departmentModel.countDocuments(query, function (err, count) {
              totalCount = count;
            });
            if (req.body.page && req.body.pageSize) page = (req.body.page - 1) * pageSize;
            _context4.t0 = departmentModel;
            _context4.t1 = query;
            _context4.next = 10;
            return function (error, success) {
              var responsedata = {
                totalRecord: totalCount,
                data: success
              };
              if (error) res.json(responseHelper.ErrorResponse(403, messageParser.alertmessage['tblDepartment'].listerror, error));else res.json(responseHelper.SuccessResponse(200, messageParser.alertmessage['tblDepartment'].listsuccess, responsedata));
            };

          case 10:
            _context4.t2 = _context4.sent;
            _context4.t3 = req.body.sort;
            _context4.t4 = page;
            _context4.t5 = pageSize;

            _context4.t0.find.call(_context4.t0, _context4.t1, _context4.t2).sort(_context4.t3).skip(_context4.t4).limit(_context4.t5);

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
/* To get department by id
 * GET:-  http://localhost:8000/api/Department?_id=5b6bcb8ca8d903200fb23855&authorization=PASS_TOKEN_HERE
 * In headers we have to pass token, like below.
    "authorization":"pass the token here" 
 */


exports.getDepartment =
/*#__PURE__*/
function () {
  var _ref5 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee5(req, res) {
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            if (req.query._id) {
              _context5.next = 4;
              break;
            }

            res.json(responseHelper.ErrorResponse(401, messageParser.useridrequired, 'error'));
            _context5.next = 10;
            break;

          case 4:
            _context5.t0 = departmentModel;
            _context5.t1 = req.query._id;
            _context5.next = 8;
            return function (error, success) {
              if (error) res.json(responseHelper.ErrorResponse(403, messageParser.alertmessage['tblDepartment'].listerror, error));else res.json(responseHelper.SuccessResponse(200, messageParser.alertmessage['tblDepartment'].listsuccess, success));
            };

          case 8:
            _context5.t2 = _context5.sent;

            _context5.t0.findById.call(_context5.t0, _context5.t1, _context5.t2);

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();