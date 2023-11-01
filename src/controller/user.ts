import User from '../model/user.model'
import { Response,Request } from 'express'

export const addUser=async(req:Request,res:Response)=>{
try {
    const data=await User.create(req.body)
    res.status(200).json({
        status:'success',
        data:data
    })
} catch (error) {
    res.status(404).json({
        status:'fail',
        data:error
    })
}}

export const getAllUser=async(req:Request,res:Response)=>{
    try {
        const data=await User.find()
        res.status(200).json({
            status:'success',
            data:data
        })
    } catch (error) {
        res.status(404).json({
            status:'fail',
        }) 
    }
}
export const getOneUser=async(req:Request,res:Response)=>{
    try {
        console.log(req.params.id)
        const data=await User.findById(req.params.id)
        res.status(200).json({
            status:'success',
            data:data
        })
    } catch (error) {
        res.status(404).json({
            status:'fail',
        }) 
    }
}

export const deleteUser=async(req:Request,res:Response)=>{
    try {
        console.log(req.params.id)
        const data=await User.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status:'success',
            data:data
        })
    } catch (error) {
        res.status(404).json({
            status:'fail',
        }) 
    }
}

export const updateUser=async(req:Request,res:Response)=>{
    try {
        console.log(req.params.id)
        const data=await User.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true
        })
        res.status(200).json({
            status:'success',
            data:data
        })
    } catch (error) {
        res.status(404).json({
            status:'fail',
        }) 
    }
}