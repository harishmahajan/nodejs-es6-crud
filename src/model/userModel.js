// var mongoose  = require ('mongoose');
import mongoose from 'mongoose';

import bcrypt from 'bcrypt-nodejs';
var Schema = mongoose.Schema;

// var bcrypt  = require ('bcrypt-nodejs');

var UserSchema = mongoose.Schema({
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
        default:null
    },
    AgencyId: {
        type: String,
        default:null
    },
    MobileNumber: {
        type: String
    },
    Email: {
        type: String,
        unique: [true,"Email should be unique"]
    },
    Password: {
        type: String
    },
    AddDate:{
        type: Date,
        default:null
    },
    UpdateDate:{
        type: Date,
        default:null
    },
    AddedBy:{
        type:String,
        default:null
    },
    UpdatedBy:{
        type:String,
        default:null
    },
    IsActive:{
        type:Boolean,
        default:true
    }
});
UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};
module.exports = mongoose.model('userModel', UserSchema, 'tblUser');
