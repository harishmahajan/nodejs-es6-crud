"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _exports$alertmessage;

exports.errormessgge = "Something went wrong, try again later.";
exports.createsuccessmessgge = "data Created Successfully.";
exports.updatesuccessmessgge = "data Updated Successfully.";
exports.deletesuccessmessgge = "data Deleted Successfully.";
exports.recordsnotfound = "Record Not Found";
exports.recordfound = "Record Found";
exports.invalidToken = "Failed to authenticate token. This token is invalid, please use correct/valid token";
exports.noToken = "Please provide a valid token. Token is necessary...!!!";
exports.useridrequired = "ID is required"; // user

exports.alertmessage = (_exports$alertmessage = {
  otherMessages: {
    errormessgge: "Something went wrong, try again later.",
    createsuccessmessgge: "data Created Successfully.",
    updatesuccessmessgge: "data Updated Successfully.",
    deletesuccessmessgge: "data Deleted Successfully.",
    recordsnotfound: "Record Not Found",
    recordfound: "Record Found",
    invalidToken: "Failed to authenticate token. This token is invalid, please use correct/valid token",
    noToken: "Please provide a valid token. Token is necessary...!!!"
  },
  tblReason: {
    createsuccess: "This reason saved successfully...!!!",
    createerror: "error while creating reason, try again later",
    updatesuccess: "This reason updated successfully...!!!",
    updateerror: "error while updating reason, try again later",
    deletesuccess: "reason deleted successfully",
    errordelete: "error while deleting reason, try again later",
    listsuccess: "reason records found successfully",
    listerror: "reason records not found, try again later",
    notEmpty: "reason should no empty...!"
  },
  tblUser: {
    createsuccess: "This user saved successfully...!!!",
    createerror: "error while creating user, try again later",
    updatesuccess: "This user updated successfully...!!!",
    updateerror: "error while updating user, try again later",
    deletesuccess: "user deleted successfully",
    errordelete: "error while deleting user, try again later",
    listsuccess: "user records found successfully",
    listerror: "user records not found, try again later",
    usernotfound: "User not found",
    incorrectpassword: "Password is incorrect, Please enter correct password"
  },
  tblDevice: {
    createsuccess: "This device saved successfully...!!!",
    createerror: "error while creating device, try again later",
    updatesuccess: "This device updated successfully...!!!",
    updateerror: "error while updating device, try again later",
    deletesuccess: "device deleted successfully",
    errordelete: "error while deleting device, try again later",
    listsuccess: "device records found successfully",
    listerror: "device records not found, try again later"
  },
  tblDriver: {
    createsuccess: "This driver saved successfully...!!!",
    createerror: "error while creating driver, try again later",
    updatesuccess: "This driver updated successfully...!!!",
    updateerror: "error while updating driver, try again later",
    deletesuccess: "driver deleted successfully",
    errordelete: "error while deleting driver, try again later",
    listsuccess: "driver records found successfully",
    listerror: "driver records not found, try again later"
  },
  tblUserRole: {
    createsuccess: "This user role saved successfully...!!!",
    createerror: "error while creating user role, try again later",
    updatesuccess: "This user role updated successfully...!!!",
    updateerror: "error while updating user role, try again later",
    deletesuccess: "user role deleted successfully",
    errordelete: "error while deleting user role, try again later",
    listsuccess: "user role records found successfully",
    listerror: "user role records not found, try again later",
    alreadyregistered: "This user role is already registered, just active this role...!!!"
  },
  tblVehicle: {
    createsuccess: "This vehicle saved successfully...!!!",
    createerror: "error while creating vehicle, try again later",
    updatesuccess: "This vehicle updated successfully...!!!",
    updateerror: "error while updating vehicle, try again later",
    deletesuccess: "vehicle deleted successfully",
    errordelete: "error while deleting vehicle, try again later",
    listsuccess: "vehicle records found successfully",
    listerror: "vehicle records not found, try again later"
  },
  tblVehicleType: {
    createsuccess: "This vehicle type saved successfully...!!!",
    createerror: "error while creating vehicle type, try again later",
    updatesuccess: "This vehicle type updated successfully...!!!",
    updateerror: "error while updating vehicle type, try again later",
    deletesuccess: "vehicle type deleted successfully",
    errordelete: "error while deleting vehicle type, try again later",
    listsuccess: "vehicle type records found successfully",
    listerror: "vehicle type records not found, try again later",
    alreadyregistered: "The vehicle type is already registered, just active this vehicle type."
  },
  tblVehiclealocation: {
    createsuccess: "vehicle allocated to this driver successfully...!!!",
    createerror: "error while allocationg vehicle to the driver, try again later",
    updatesuccess: "This vehicle allocation updated successfully...!!!",
    updateerror: "error while updating vehicle alocation, try again later"
  },
  tblFirmwareHistory: {
    createsuccess: "This firmware saved successfully...!!!",
    createerror: "error while creating firmware, try again later",
    updatesuccess: "This firmware updated successfully...!!!",
    updateerror: "error while updating firmware, try again later",
    deletesuccess: "firmware deleted successfully",
    errordelete: "error while deleting firmware, try again later",
    listsuccess: "firmware records found successfully",
    listerror: "firmware records not found, try again later"
  },
  tblAgency: {
    createsuccess: "This agency saved successfully...!!!",
    createerror: "Error while creating agency, try again later",
    updatesuccess: "This agency updated successfully...!!!",
    updateerror: "Error while updating agency, try again later",
    deletesuccess: "Agency deleted successfully",
    errordelete: "Error while deleting firmware, try again later",
    listsuccess: "Agency records found successfully",
    listerror: "Agency records not found, try again later",
    alreadyregistered: "This agency name is already registered, just active this agency...!!!",
    idnotfound: "invalid id"
  },
  tblVehicleMake: {
    createsuccess: "This vehicle make saved successfully...!!!",
    createerror: "error while creating vehicle make, try again later",
    updatesuccess: "This vehicle make updated successfully...!!!",
    updateerror: "error while updating vehicle make, try again later",
    deletesuccess: "vehicle make deleted successfully",
    errordelete: "error while deleting vehicle make, try again later",
    listsuccess: "vehicle make records found successfully",
    listerror: "vehicle make records not found, try again later",
    alreadyregistered: "The vehicle make is already registered, just active it"
  }
}, (0, _defineProperty2.default)(_exports$alertmessage, "tblVehicle", {
  createsuccess: "This vehicle saved successfully...!!!",
  createerror: "error while creating vehicle, try again later",
  updatesuccess: "This vehicle updated successfully...!!!",
  updateerror: "error while updating vehicle, try again later",
  deletesuccess: "vehicle deleted successfully",
  errordelete: "error while deleting vehicle, try again later",
  listsuccess: "vehicle records found successfully",
  listerror: "vehicle records not found, try again later",
  alreadyregistered: "The vehicle is already registered, just active it"
}), (0, _defineProperty2.default)(_exports$alertmessage, "tblVehicleModel", {
  createsuccess: "This vehicle model saved successfully...!!!",
  createerror: "error while creating vehicle model, try again later",
  updatesuccess: "This vehicle model updated successfully...!!!",
  updateerror: "error while updating vehicle model, try again later",
  deletesuccess: "vehicle model deleted successfully",
  errordelete: "error while deleting vehicle model, try again later",
  listsuccess: "vehicle model records found successfully",
  listerror: "vehicle model records not found, try again later",
  alreadyregistered: "The vehicle model is already registered, just active it"
}), (0, _defineProperty2.default)(_exports$alertmessage, "tblFuelType", {
  createsuccess: "This fuel type saved successfully...!!!",
  createerror: "error while creating fuel type, try again later",
  updatesuccess: "This fuel type updated successfully...!!!",
  updateerror: "error while updating fuel type, try again later",
  deletesuccess: "fuel type deleted successfully",
  errordelete: "error while deleting fuel type, try again later",
  listsuccess: "fuel type records found successfully",
  listerror: "fuel type records not found, try again later",
  alreadyregistered: "The fuel type is already registered, just active it"
}), (0, _defineProperty2.default)(_exports$alertmessage, "tblDepartment", {
  createsuccess: "This department saved successfully...!!!",
  createerror: "error while creating department, try again later",
  updatesuccess: "This department updated successfully...!!!",
  updateerror: "error while updating department, try again later",
  deletesuccess: "department deleted successfully",
  errordelete: "error while deleting department, try again later",
  listsuccess: "department records found successfully",
  listerror: "department records not found, try again later",
  alreadyregistered: "The department is already registered, just active it",
  idnotfound: "invalid id"
}), (0, _defineProperty2.default)(_exports$alertmessage, "tblOperator", {
  createsuccess: "This operator saved successfully...!!!",
  createerror: "error while creating operator, try again later",
  updatesuccess: "This operator updated successfully...!!!",
  updateerror: "error while updating operator, try again later",
  deletesuccess: "operator deleted successfully",
  errordelete: "error while deleting operator, try again later",
  listsuccess: "operator records found successfully",
  listerror: "operator records not found, try again later",
  alreadyregistered: "The operator is already registered, just active it",
  idnotfound: "invalid id"
}), (0, _defineProperty2.default)(_exports$alertmessage, "tblRegion", {
  createsuccess: "This Region saved successfully...!!!",
  createerror: "error while creating Region, try again later",
  updatesuccess: "This Region updated successfully...!!!",
  updateerror: "error while updating Region, try again later",
  deletesuccess: "Region deleted successfully",
  errordelete: "error while deleting Region, try again later",
  listsuccess: "Region records found successfully",
  listerror: "Region records not found, try again later",
  alreadyregistered: "The Region is already registered, just active it"
}), (0, _defineProperty2.default)(_exports$alertmessage, "tblVehicleCommunication", {
  createsuccess: "This Vehicle Communication saved successfully...!!!",
  createerror: "error while creating Vehicle Communication, try again later",
  updatesuccess: "This Vehicle Communication updated successfully...!!!",
  updateerror: "error while updating Vehicle Communication, try again later",
  deletesuccess: "Vehicle Communication deleted successfully",
  errordelete: "error while deleting Vehicle Communication, try again later",
  listsuccess: "Vehicle Communication records found successfully",
  listerror: "Vehicle Communication records not found, try again later",
  alreadyregistered: "The Vehicle Communication is already registered, just active it",
  bulkuploadsuccess: "Bulk upload done successfully...!!!",
  duplicaterecord: "Duplicate record is not allowed...!!!"
}), (0, _defineProperty2.default)(_exports$alertmessage, "tblModule", {
  createsuccess: "This Module saved successfully...!!!",
  createerror: "error while creating Module, try again later",
  updatesuccess: "This Module updated successfully...!!!",
  updateerror: "error while updating Module, try again later",
  deletesuccess: "Module deleted successfully",
  errordelete: "error while deleting Module, try again later",
  listsuccess: "Module records found successfully",
  listerror: "Module records not found, try again later",
  alreadyregistered: "The Module is already registered, just active it"
}), (0, _defineProperty2.default)(_exports$alertmessage, "tblRolePermission", {
  createsuccess: "This Role Permission saved successfully...!!!",
  createerror: "error while creating Role Permission, try again later",
  updatesuccess: "This Role Permission updated successfully...!!!",
  updateerror: "error while updating Role Permission, try again later",
  deletesuccess: "Role Permission deleted successfully",
  errordelete: "error while deleting Role Permission, try again later",
  listsuccess: "Role Permission records found successfully",
  listerror: "Role Permission records not found, try again later",
  alreadyregistered: "The Role Permission is already registered, just active it"
}), (0, _defineProperty2.default)(_exports$alertmessage, "NtblRoute", {
  createsuccess: "This Route saved successfully...!!!",
  createerror: "error while creating Route, try again later",
  updatesuccess: "This Route updated successfully...!!!",
  updateerror: "error while Route Permission, try again later",
  deletesuccess: "Route deleted successfully",
  errordelete: "error while deleting Route, try again later",
  listsuccess: "Route records found successfully",
  listerror: "Route records not found, try again later",
  alreadyregistered: "The Route is already registered, just active it"
}), _exports$alertmessage);