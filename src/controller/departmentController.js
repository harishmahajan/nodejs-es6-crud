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

exports.createDepartment = async (req, res) => {
    if (!req.body.AddedBy) res.json(responseHelper.ErrorResponse(401, messageParser.useridrequired, 'error'));
    else{
        var requestdata = new departmentModel();
        requestdata.DepartmentName = req.body.DepartmentName;
        requestdata.AddDate = Date.now();
        requestdata.AddedBy = req.body.AddedBy;

        departmentModel.findOne({"DepartmentName":req.body.DepartmentName}, await function(error,response){
            if(response!=null)
            res.json(responseHelper.SuccessResponse(200, messageParser.alertmessage['tblDepartment'].alreadyregistered, null));
            else
            {
                departmentModel.create(requestdata, function (error, success) {
                    if (error) res.json(responseHelper.ErrorResponse(401, messageParser.alertmessage['tblDepartment'].createerror, error));
                    else  res.json(responseHelper.SuccessResponse(200, messageParser.alertmessage['tblDepartment'].createsuccess, success));
                });
            }
        });
    }
}

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

 exports.updateDepartment = async (req, res) => {
    if (!req.body.UpdatedBy) res.json(responseHelper.ErrorResponse(401, messageParser.useridrequired, 'error'));
    if (!req.body._id) res.json(responseHelper.ErrorResponse(401, messageParser.useridrequired, 'error'));
    else {
        var requestdata = {
            DepartmentName : req.body.DepartmentName,
            UpdateDate : Date.now(),
            UpdatedBy : req.body.UpdatedBy
        }
        departmentModel.update({_id: req.body._id},{$set:requestdata},{upsert:true}, await function (error, success) {
            if (error) res.json(responseHelper.ErrorResponse(401, messageParser.alertmessage['tblDepartment'].updateerror, error));
            else  res.json(responseHelper.SuccessResponse(200, messageParser.alertmessage['tblDepartment'].updatesuccess, success));
        });
    }
 }
/* To remove department
 * Delete  http://localhost:1810/api/Department?_id=5b6a8e49206b40c015621482&UpdatedBy=USERID-SHOULD-HERE
 * In headers we have to pass token, like below.
    "authorization":"pass the token here"
 */

exports.deleteDepartment = async(req, res) => {
    if (!req.query._id) res.json(responseHelper.ErrorResponse(401, messageParser.useridrequired, 'error'));
    else{
        departmentModel.findOne({_id: req.query._id }, await function (err, response) {
            if (err) res.json(responseHelper.ErrorResponse(403, messageParser.alertmessage['tblDepartment'].idnotfound, err));
            else {
                var requestdata = {
                    IsActive: !response.IsActive,
                    UpdateDate: Date.now(),
                    Updatedby: req.query.Updatedby
                }

                departmentModel.update({ _id: req.query._id }, { $set: requestdata}, {upsert: true}, function (error, result) {
                        if (error) res.json(responseHelper.ErrorResponse(403, messageParser.alertmessage['tblDepartment'].idnotfound, error));
                        else res.json(responseHelper.SuccessResponse(200, messageParser.alertmessage['tblDepartment'].updatesuccess, result));
                });
            }
        });
    }
}

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
exports.listDepartment = async(req, res) => {
    let query = req.body.params;
    var pageSize = req.body.pageSize;
    var page = req.body.page;
    var totalCount = 0;
  
    departmentModel.countDocuments(query, function (err, count) {
        totalCount = count;
    });

    if(req.body.page && req.body.pageSize) page = (req.body.page - 1) * pageSize;
    departmentModel.find(query, await function (error, success) {
        var responsedata= {
            totalRecord : totalCount,
            data : success
        }
        if (error) res.json(responseHelper.ErrorResponse(403, messageParser.alertmessage['tblDepartment'].listerror, error));
        else res.json(responseHelper.SuccessResponse(200, messageParser.alertmessage['tblDepartment'].listsuccess, responsedata));
    }).sort(req.body.sort).skip(page).limit(pageSize); 
}

/* To get department by id
 * GET:-  http://localhost:8000/api/Department?_id=5b6bcb8ca8d903200fb23855&authorization=PASS_TOKEN_HERE
 * In headers we have to pass token, like below.
    "authorization":"pass the token here" 
 */
exports.getDepartment = async(req,res) => {
    if (!req.query._id) res.json(responseHelper.ErrorResponse(401, messageParser.useridrequired, 'error'));
    else {
        departmentModel.findById(req.query._id, await function (error, success) {
            if (error) res.json(responseHelper.ErrorResponse(403, messageParser.alertmessage['tblDepartment'].listerror, error));
            else res.json(responseHelper.SuccessResponse(200, messageParser.alertmessage['tblDepartment'].listsuccess, success));
        })
    }
}
