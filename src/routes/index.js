import express from 'express';
import config from '../config';
import response from '../helpers/responseHelper';
import messageParser from '../helpers/messageParser';
import * as user from '../controller/userController.js';
// import department from '../controller/departmentController';

var apiRoutes = express.Router();
var router = express.Router();

router.get('/listUser', user.listUser);


export default router;
