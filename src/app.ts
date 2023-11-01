import express from "express"
import userRoute from './route/user'
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/ok',(req, res) => {
    res.send('ok')
})
app.use('/users',userRoute)
// app.use('/api',userRoute)
app.all('*',(req:express.Request,res:express.Response)=>{
    console.log('Error in url')
})

export default app