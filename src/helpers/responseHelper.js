exports.ErrorResponse = function(code,message,response) {
  var data = {
    code: code,
    status: "error",
    message: message,
    responseData: response
  };
  return data;
};

exports.SuccessResponse = function(code,message,response, total) {
  var data = {
    code: code,
    status: "success",
    message: message,
    responseData: response
  };
  return data;
};
