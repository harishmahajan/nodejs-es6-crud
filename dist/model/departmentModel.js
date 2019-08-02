"use strict";

var mongoose = require('mongoose');

var DepartmentSchema = mongoose.Schema({
  DepartmentName: {
    type: String,
    required: [true, 'Department name is required']
  },
  AddDate: {
    type: Date
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
  DeletedBy: {
    type: String,
    default: null
  },
  IsActive: {
    type: Boolean,
    default: true
  }
});
module.exports = mongoose.model("departmentModel", DepartmentSchema, "tblDepartment");