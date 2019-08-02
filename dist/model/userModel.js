"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bcryptNodejs = _interopRequireDefault(require("bcrypt-nodejs"));

// var mongoose  = require ('mongoose');
var Schema = _mongoose.default.Schema; // var bcrypt  = require ('bcrypt-nodejs');

var UserSchema = _mongoose.default.Schema({
  FirstName: {
    type: String
  },
  LastName: {
    type: String
  },
  ProfileImage: {
    type: String
  },
  RoleId: {
    type: String,
    default: null
  },
  AgencyId: {
    type: String,
    default: null
  },
  MobileNumber: {
    type: String
  },
  Email: {
    type: String,
    unique: [true, "Email should be unique"]
  },
  Password: {
    type: String
  },
  AddDate: {
    type: Date,
    default: null
  },
  UpdateDate: {
    type: Date,
    default: null
  },
  AddedBy: {
    type: String,
    default: null
  },
  UpdatedBy: {
    type: String,
    default: null
  },
  IsActive: {
    type: Boolean,
    default: true
  }
});

UserSchema.methods.generateHash = function (password) {
  return _bcryptNodejs.default.hashSync(password, _bcryptNodejs.default.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function (password) {
  return _bcryptNodejs.default.compareSync(password, this.password);
};

module.exports = _mongoose.default.model('userModel', UserSchema, 'tblUser');