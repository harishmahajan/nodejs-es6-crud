import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './routes/index';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import config from './config';


const app = express();

mongoose.Promise = global.Promise;
var url = config.db.url;

mongoose.connect(url,{ useNewUrlParser: true },  (err) => {
    if (err) {
        console.log('Sorry can not connect with mongodb...');
    } else {
        console.log('Successfully connected mongodb...');
    }
});

app.use(bodyParser.json({
    limit: '50mb'
}));
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit: 50000
}));

var enableCORS = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, token, Content-Length, X-Requested-With, *');
    if ('OPTIONS' === req.method) {
        res.sendStatus(200);
    } else {
        next();
    }
};
app.all("/*", function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, token, Content-Length, X-Requested-With, *');
    next();
});
app.use(enableCORS);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);

// module.exports  mongoose;
export default app;
// module.exports = {
//     mongoose:mongoose,
//     app:app
//   }
  