// Schema less controller

var MongoClient = require('mongodb').MongoClient;
var config = require("../config");
var url = config.db.url;
var database = config.db.database;
var response = require("../helpers/responseHelper");
let db = new MongoClient.connect(url, function (err, client) {
    db = client.db(database);
});
//var ObjectId = require('mongodb').ObjectID;
var jwt = require("jsonwebtoken");
var messageParser = require("../helpers/messageParser");


// Api for Insert Document
/** POST http://localhost:8000/api/createRecord
    {
        "collection":"tblTest",
        "data":{
            "fname":"harish",
            "lname":"mahajan"
        }
    }
    This is schema less method, so you can pass any data from frontend.
*/
// exports.createRecord = function (req, res) {
//     let collection = req.body.collection;
//     console.log("collection : ",collection);
//     db.collection(collection).insertOne(req.body.data, function (err, result) {
//         if (err) {
//             res.json(response.ErrorResponse(401, messageParser.alertmessage[collection].createerror, err));
//         } else {
//             res.json(response.SuccessResponse(200, messageParser.alertmessage[collection].createsuccess, result));
//         }
//     })
// };

exports.createRecord = function (req, res) {
    db.collection("tblIsgTrackingLog").insertOne(req.body, function (err, result) {
        if (!err) {
            res.json(true);
        } else {
            res.json(false);
        }
    })
}

// Api for Update Document
exports.updateRecord = function (req, res) {
    let collection = req.body.collection;
    var data = req.body.data;
    var query = {
        "_id": ObjectId(data._id)
    };
    delete data._id;
    var newvalues = {
        $set: data
    };
    db.collection(collection).findOneAndUpdate(query, newvalues, function (err, result) {
        if (err) {
            res.json(response.ErrorResponse(401, messageParser.alertmessage[collection].updateerror, err));
        } else {
            res.json(response.SuccessResponse(200, messageParser.alertmessage[collection].updatesuccess, result));
        }
    });
};

// Api for delete document
exports.deleteRecord = function (req, res) {
    let collection = req.body.collection;
    var id = ObjectId(req.body.data);
    var newvalues = {
        $set: {
            "isDel": true
        }
    };
    db.collection(collection).findOneAndUpdate({
        "_id": id
    }, newvalues, function (err, result) {
        if (err) {
            res.json(response.ErrorResponse(401, messageParser.alertmessage[collection].errordelete, err));
        } else {
            res.json(response.SuccessResponse(200, messageParser.alertmessage[collection].deletesuccess, result));
        }
    });
}

// Api for read single document
exports.readRecord = function (req, res) {
    var id = ObjectId(req.body.data);
    db.collection(req.body.collection).find({
        "_id": id
    }).toArray(function (err, result) {
        if (err) {
            res.json(response.ErrorResponse(401, messageParser.errormessgge, err));
        } else {
            res.json(response.SuccessResponse(200, messageParser.recordfound, result));
        }
    });
}

// Api for Get List
exports.getList = function (req, res) {
    let collection = req.body.collection;
    var cursor = db.collection(collection).find(req.body.condition, req.body.data).toArray(function (err, result) {
        if (err) {
            res.json(response.ErrorResponse(401, messageParser.errormessgge, err));
        } else {
            res.json(response.SuccessResponse(200, messageParser.alertmessage[collection].listsuccess, result));
        }
    });
};

// Api for get user list
exports.getUserDetails = function (req, res) {
    db.collection(req.body.collection).find({
        $and: [{
            "email": req.body.email
        }, {
            "pwd": req.body.pwd
        }]
    }).toArray(function (err, result) {
        if (err) {
            res.json(response.ErrorResponse(401, messageParser.recordsnotfound, err));
        } else {
            if (result.length > 0) {
                var authToken = jwt.sign(req.body, config.secret, {
                    expiresIn: 1440 * 60 * 30 // expires in 24 hours
                });
                console.log("token", authToken);
                res.json({
                    code: 200,
                    status: "success",
                    message: messageParser.recordfound,
                    data: result,
                    token: authToken
                });
            } else {
                res.json(response.ErrorResponse(401, messageParser.recordsnotfound, result));
            }
        }
    });
};

exports.testApi = async(req,res)=>{
    // console.log("==>",req.query);
    
    let query = {};
    var pageSize = parseInt(req.query.rows);
    var page = parseInt(req.query.page);
    var sort = req.query.sord=="ASC"?1:-1;
    var totalRecords = 0;
    var totalPages = 0;
    db.collection("test").countDocuments(query, function (err, count) {
        totalRecords = count;
        totalPages = totalRecords / pageSize;
    });
    if (page && pageSize) page = (page - 1) * pageSize;
    db.collection("test").find({}).skip(page).limit(pageSize).sort({'ShipName':sort}).toArray(function (err, result) {
            var obj = {
                total : totalPages,
                page : parseInt(req.query.page),
                records : totalRecords,
                rows : result
            };
            res.json(obj);
    });

    // let query = req.body.params;
    // var pageSize = req.body.numRows;
    // var page = req.body.pageNumber;
    // // var pageSize = 5;
    // // var page = 1;
    // var totalCount = 0;
    // if (req.body.page && req.body.pageSize) page = (req.body.page - 1) * pageSize;
    // db.collection("test").find({}).skip(page).limit(pageSize).toArray(function (err, result) {
    //         var obj = {
    //             "records":"1000000",
    //             "page":page,
    //             "total":50000,
    //             "rows":result
    //         };
    //         res.json(obj);
    // });
  }