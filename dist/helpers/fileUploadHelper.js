"use strict";

var base64ToImage = require('base64-to-image');

var moment = require('moment');

exports.folders = {
  "agency": "agency",
  "userProfile": "userProfile",
  "operatorProfile": "operatorProfile",
  "vehicleType": "vehicleType",
  "firmware": "firmware"
};

exports.imageUploader = function (_id, image, folderName) {
  if (_id && image) {
    var base64Str = image;
    var path = './assets/' + folderName + "/";
    var optionalObj = {
      'fileName': _id + "_" + moment().unix(),
      'type': 'jpg'
    };
    var data = base64ToImage(base64Str, path, optionalObj);
    return data.fileName;
  } else return;
};

exports.firmwareUploader = function (_id, firmware, version, folderName) {
  if (_id && firmware && version) {
    var base64Str = firmware;
    var path = './assets/' + folderName + "/";
    var optionalObj = {
      'fileName': _id + "_" + version,
      'type': 'bin'
    };
    var data = base64ToImage(base64Str, path, optionalObj);
    return data.fileName;
  } else return false;
};