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
    },
    passwordConfirm:{
        type:String,
        validate:{
           validator:function(a:string){
            return a===this.password
        }, message:''}

    }
})