import mongoose from 'mongoose';
import userModel from '../model/userModel';
import responseHelper from '../helpers/responseHelper';
import messageParser from '../helpers/messageParser';

exports.listUser = async (req, res) => {
  let query ={};
  let pageSize = parseInt(req.query.pageSize);
  let page = parseInt(req.query.page);
  let totalCount = 0, tempCount = 0;
  let datas = [];
 await  userModel.countDocuments(query, function (err, count) {
    totalCount = count;
  });

  if (req.query.page && req.query.pageSize) page = (req.query.page - 1) * pageSize;
  let userData = await userModel.find().skip(page).limit(pageSize);

  for (let user of userData) {

    datas.push({
      _id: user._id,
      FirstName: user.FirstName,
      LastName: user.LastName,
      Email: user.Email,
      MobileNumber: user.MobileNumber,
      ProfileImage: user.ProfileImage,
      IsActive: user.IsActive,
      AddedBy: user.AddedBy,
      AddDate: user.AddDate,
      UpdateDate: user.UpdatedDate,
      UpdatedBy: user.UpdatedBy
    });
  }
  let responseData = {
    totalRecord: totalCount,
    data: datas
  };
  res.json(responseHelper.SuccessResponse(200, messageParser.alertmessage['tblUser'].listsuccess, responseData));
}

/* To add user 
  POST http://localhost:1810/api/User
  {
    "FirstName":"harish",
    "LastName":"mahajan",
    "Email":"atoz@gmail.com",
    "MobileNumber":"123123123",
    "ProfileImage":"testImg",
    "RoleId":"123",
    "AgencyId":"321",
    "Password":"atoz123",
    "AddedBy":"userid"
  }
* */

// exports.createUser = async (req, res) => {
//   if (!req.body.AddedBy) res.json(responseHelper.ErrorResponse(401, messageParser.useridrequired, 'error'));
//   var base64img = req.body.ProfileImage;
//   var requestdata = new userModel();
//   requestdata.FirstName = req.body.FirstName;
//   requestdata.LastName = req.body.LastName;
//   requestdata.Email = req.body.Email;
//   requestdata.MobileNumber = req.body.MobileNumber;
//   requestdata.RoleId = req.body.RoleId;
//   requestdata.AgencyId = req.body.AgencyId;
//   requestdata.Password = requestdata.generateHash(req.body.Password),   //req.body.Password;
//   requestdata.AddDate = Date.now(),
//   requestdata.AddedBy = req.body.AddedBy,
//   requestdata.isActive = true;
//   userModel.create(requestdata, function (error, success) {
//     if (error) res.json(responseHelper.ErrorResponse(401, messageParser.alertmessage['tblUser'].createerror, error));
//     else {
//       var folderName = fileUploadHelper.folders["userProfile"];
//       var data = fileUploadHelper.imageUploader(success._id, base64img, folderName);
//       var successdata = {
//         ProfileImage: data
//       }
//       userModel.update({ _id: success._id }, { $set: successdata }, { upsert: true }, function (er, succ) {
//         if (er) res.json(responseHelper.ErrorResponse(401, messageParser.alertmessage['tblUser'].createerror, er));
//         else res.json(responseHelper.ErrorResponse(200, messageParser.alertmessage['tblUser'].createsuccess, succ));
//       });
//       var obj = {};
//       obj.reciever = req.body.Email;
//       obj.password = req.body.Password;
//       obj.subject = "AVLMS User";
//       //obj.text = "Your Account is created";
//       obj.htmlTemplate = "<b>Your Account is created</b><br>Your Email : <b>" + req.body.Email + "</b> Password:- <b>" + req.body.Password + "</b>"  // html body
//       mail.sentMail(obj);
//     }
//   });
// }

/*  [PUT] http://localhost:1810/api/User 
    {
      "_id": "5b72c53bae27061b0c912d16",
      "FirstName":"hm",
      "LastName":"mahajan",
      "Email":"hpm@gmail.com",
      "MobileNumber":"1515",
      "ProfileImage":"testImg",
      "RoleId":"123",
      "AgencyId":"321",
      "UpdatedBy":"hpm"
    } 
*/
// exports.updateUser = async (req, res) => {
//   if (!req.body.UpdatedBy) res.json(responseHelper.ErrorResponse(401, messageParser.useridrequired, 'error'));
//   if (!req.body._id) res.json(responseHelper.ErrorResponse(401, messageParser.useridrequired, 'error'));
//   else {
//     if (req.body.IsImageUpdate == true) {
//       var usersData = await userModel.findById({ _id: req.body._id });
//       if (usersData) {
//         fs.unlink('./assets/' + fileUploadHelper.folders["userProfile"] + '/' + usersData.ProfileImage, function (err) {
//           if (err) {
//             console.error(err);
//           }
//           console.log('File has been Deleted');
//         });
//       }
//       var base64img = req.body.ProfileImage;
//       var folderName = fileUploadHelper.folders["userProfile"];
//       var data = fileUploadHelper.imageUploader(req.body._id, base64img, folderName);
//       var requestdata = {
//         FirstName: req.body.FirstName,
//         LastName: req.body.LastName,
//         Email: req.body.Email,
//         MobileNumber: req.body.MobileNumber,
//         ProfileImage: data,       
//         UpdateDate: Date.now(),
//         UpdatedBy: req.body.UpdatedBy
//       }
//     }
//     else {
//       var requestdata = {
//         FirstName: req.body.FirstName,
//         LastName: req.body.LastName,
//         Email: req.body.Email,
//         MobileNumber: req.body.MobileNumber,
//         UpdateDate: Date.now(),
//         UpdatedBy: req.body.UpdatedBy
//       }
//     }

//     userModel.update({ _id: req.body._id }, { $set: requestdata }, { upsert: true }, await function (error, success) {
//       if (error) res.json(responseHelper.ErrorResponse(401, messageParser.alertmessage['tblUser'].updateerror, error));
//       else res.json(responseHelper.SuccessResponse(200, messageParser.alertmessage['tblUser'].updatesuccess, success));
//     });
//   }
// }
/* To login user
  POST http://localhost:1810/api/login
  {
    "Email":"harish@gmail.com",
    "Password":"harish123"
  }
 */
// exports.login = (req, res) => {
//   var requestdata = new userModel();
//   userModel.findOne({
//     'Email': req.body.Email
//   }, function (err, userDetail) {
//     if (bcrypt.compareSync(req.body.Password, userDetail.Password)) {
//       var access_token = jwt.sign(userDetail, config.secret, { expiresIn: '24h' });
//       var claims = {
//         sub: userDetail._id,
//         iss: 'https://transcom.com',
//         permissions: 'upload-photos',
//         firstName: userDetail.FirstName,
//         lastName: userDetail.LastName,
//         email: userDetail.Email,
//         agencyId: userDetail.AgencyId,
//         role: userDetail.RoleId
//       }
//       var jwtobj = nJwt.create(claims, config.secret);
//       var token = jwtobj.compact();

//       res.json({
//         "code": 200,
//         "access_token": access_token,
//         "refresh_token": access_token,
//         "id_token": token,
//         "expires_in": '24h'
//       });
//     } else {
//       res.json({
//         "code": 403,
//         "status": "Error",
//         "message": "Email or Password is Worng"
//       });
//     }
//   });
// }

/** To get the list of User Role. 
 *  POST http://localhost:1810/api/listUserRole
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


/* [DELETE] http://localhost:1810/api/User?_id=5b72c53bae27061b0c912d16&UpdatedBy=HBHJB^%26GYHJUHB
   
*/
// exports.deleteUser = async (req, res) => {
//   if (!req.query._id) res.json(responseHelper.ErrorResponse(401, messageParser.useridrequired, 'error'));
//   else {
//     userModel.findOne({ _id: req.query._id }, await function (err, response) {
//       if (err) res.json(responseHelper.ErrorResponse(403, messageParser.alertmessage['tblUser'].idnotfound, err));
//       else {
//         var requestdata = {
//           IsActive: !response.IsActive,
//           UpdateDate: Date.now(),
//           UpdatedBy: req.query.UpdatedBy
//         }

//         userModel.update({ _id: req.query._id }, { $set: requestdata }, { upsert: true }, function (error, result) {
//           if (error) res.json(responseHelper.ErrorResponse(403, messageParser.alertmessage['tblUser'].idnotfound, error));
//           else {
//             res.json(responseHelper.SuccessResponse(200, messageParser.alertmessage['tblUser'].updatesuccess, result));
//           }
//         });
//       }
//     });
//   }
// };

/* To get user by id
 * GET http://localhost:1810/User?_id=5b6bcb8ca8d903200fb23855&token=TOKEN_IS_HERE
 * In headers we have to pass token, like below.
    "authorization":"pass the token here"
 */
// exports.getUser = async (req, res) => {
//   if (!req.query._id) res.json(responseHelper.ErrorResponse(401, messageParser.useridrequired, 'error'));
//   else {
//     userModel.findById(req.query._id, await function (error, success) {
//       if (error) res.json(responseHelper.ErrorResponse(403, messageParser.alertmessage['tblUser'].listerror, error));
//       else res.json(responseHelper.SuccessResponse(200, messageParser.alertmessage['tblUser'].listsuccess, success));
//     })
//   }
// };

/** POST  http://localhost:1810/api/changePassword
 *  {
      "_id":"5b751f087e947505b0660636",
      "Password":"harish123",
      "NewPassword":"123456"
    }
 * 
 */

// exports.changePassword = async (req, res) => {
//   if (!req.body._id) res.json(responseHelper.ErrorResponse(401, messageParser.useridrequired, 'error'));
//   var userData = await userModel.findOne({ _id: req.body._id });
//   if (userData) {
//     if (bcrypt.compareSync(req.body.Password, userData.Password)) {
//       var user = new userModel();
//       var requestdata = {
//         Password: user.generateHash(req.body.NewPassword),
//         UpdateDate: Date.now()
//       }
//       userModel.update({ _id: req.body._id }, { $set: requestdata }, { upsert: true }, await function (error, success) {
//         if (error) res.json(responseHelper.ErrorResponse(401, messageParser.alertmessage['tblUser'].updateerror, error));
//         else res.json(responseHelper.SuccessResponse(200, messageParser.alertmessage['tblUser'].updatesuccess, success));
//       });
//     }
//     else {
//       res.json(responseHelper.SuccessResponse(200, messageParser.alertmessage['tblUser'].incorrectpassword, ""))
//     }
//   }
//   else {
//     res.json(responseHelper.SuccessResponse(200, messageParser.alertmessage['tblUser'].usernotfound, ""))
//   }
// }

// exports.testApi = async(req,res)=>{
//   // console.log("call");
//   // var data = {"records":"1000000","page":1,"total":50000,"rows":[{"OrderID":"1","CustomerID":"WILMK","OrderDate":"1996-07-04 00:00:00","Freight":"32.3800","ShipName":"Vins et alcools Chevalier"},{"OrderID":"2","CustomerID":"TRADH","OrderDate":"1996-07-05 00:00:00","Freight":"11.6100","ShipName":"Toms Spezialitäten"},{"OrderID":"3","CustomerID":"HANAR","OrderDate":"1996-07-08 00:00:00","Freight":"65.8300","ShipName":"Hanari Carnes"},{"OrderID":"4","CustomerID":"VICTE","OrderDate":"1996-07-08 00:00:00","Freight":"41.3400","ShipName":"Victuailles en stock"},{"OrderID":"5","CustomerID":"SUPRD","OrderDate":"1996-07-09 00:00:00","Freight":"51.3000","ShipName":"Suprêmes délices"},{"OrderID":"6","CustomerID":"HANAR","OrderDate":"1996-07-10 00:00:00","Freight":"58.1700","ShipName":"Hanari Carnes"},{"OrderID":"7","CustomerID":"CHOPS","OrderDate":"1996-07-11 00:00:00","Freight":"22.9800","ShipName":"Chop-suey Chinese"},{"OrderID":"8","CustomerID":"RICSU","OrderDate":"1996-07-12 00:00:00","Freight":"148.3300","ShipName":"Richter Supermarkt"},{"OrderID":"9","CustomerID":"WELLI","OrderDate":"1996-07-15 00:00:00","Freight":"13.9700","ShipName":"Wellington Importadora"},{"OrderID":"10","CustomerID":"HILAA","OrderDate":"1996-07-16 00:00:00","Freight":"81.9100","ShipName":"HILARIÓN-Abastos"},{"OrderID":"11","CustomerID":"ERNSH","OrderDate":"1996-07-17 00:00:00","Freight":"140.5100","ShipName":"Ernst Handel"},{"OrderID":"12","CustomerID":"CENTC","OrderDate":"1996-07-18 00:00:00","Freight":"3.2500","ShipName":"Centro comercial Moctezuma"},{"OrderID":"13","CustomerID":"OLDWO","OrderDate":"1996-07-19 00:00:00","Freight":"55.0900","ShipName":"Ottilies Käseladen"},{"OrderID":"14","CustomerID":"QUEDE","OrderDate":"1996-07-19 00:00:00","Freight":"3.0500","ShipName":"Que Delícia"},{"OrderID":"15","CustomerID":"RATTC","OrderDate":"1996-07-22 00:00:00","Freight":"48.2900","ShipName":"Rattlesnake Canyon Grocery"},{"OrderID":"16","CustomerID":"ERNSH","OrderDate":"1996-07-23 00:00:00","Freight":"146.0600","ShipName":"Ernst Handel"},{"OrderID":"17","CustomerID":"FOLKO","OrderDate":"1996-07-24 00:00:00","Freight":"3.6700","ShipName":"Folk och fä HB"},{"OrderID":"18","CustomerID":"BLONP","OrderDate":"1996-07-25 00:00:00","Freight":"55.2800","ShipName":"Blondel père et fils"},{"OrderID":"19","CustomerID":"WARTH","OrderDate":"1996-07-26 00:00:00","Freight":"25.7300","ShipName":"Wartian Herkku"},{"OrderID":"20","CustomerID":"FRANK","OrderDate":"1996-07-29 00:00:00","Freight":"208.5800","ShipName":"Frankenversand"}]};
//   // res.json(data);
//   let query = req.body.params;
//   var pageSize = req.body.numRows;
//   var page = req.body.pageNumber;
//   var totalCount = 0;

//   fuelType.countDocuments(query, function (err, count) {
//       totalCount = count;
//       console.log(JSON.stringify(count));
//   });

//   if(req.body.page && req.body.pageSize) page = (req.body.page - 1) * pageSize;
//   fuelType.find(query, await function (error, success) {
//       var responsedata= {
//           totalRecord : totalCount,
//           data : success
//       }
//       if (error) res.json(responseHelper.ErrorResponse(403, messageParser.alertmessage['tblFuelType'].listerror, error));
//       else res.json(responseHelper.SuccessResponse(200, messageParser.alertmessage['tblFuelType'].listsuccess, responsedata));
//   }).sort(req.body.sort).skip(page).limit(pageSize);
// }