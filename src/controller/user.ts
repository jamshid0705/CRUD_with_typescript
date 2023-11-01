import User from '../model/user.model'
import { Response,Request } from 'express'

export const addUser=async(req:Request,res:Response)=>{try {
    console.log('lllllllllllllllllllllllllllll')
    const data=await User.create(req.body)
    res.status(200).json({
        status:'success',
        data:data
    })
} catch (error) {
    res.status(404).json({
        status:'fail',
    })
}}