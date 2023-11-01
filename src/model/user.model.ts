import mongoose from "mongoose";
import validator from 'validator'

const User=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please! Your name']
    },
    age:{
        type:Number,
        required:[true,'Your age']
    },
    email:{
        type:String,
        required:[true,'Please! Your email'],
        unique: true,
        validate:[validator.isEmail, validator.isLowercase]
    },
    password:{
        type:String,
        minLength:[8,'Password length min 8 character'],
        required:[true,'Your password']
    },
    passwordConfirm:{
        type:String,
        // validate:{
        //    validator:function(a:string):boolean{
        //     let b:string=this.password
        //     return a==b
        // }, message:''}
        required:[true,'You must write your password!']
    },
    passwordChangeData:{
        type:Date,
        default:new Date()
    }
})

const Model=mongoose.model('users',User)

export default Model