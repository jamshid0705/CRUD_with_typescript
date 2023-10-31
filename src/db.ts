import app from './app'
import mongoose from 'mongoose'
import config from 'config'

const db:string=config.get('database')

mongoose.connect(db,{}).then(()=>{
    console.log('DB connect successfully')
}).catch(error=>{
    console.log('DB connected fail',error)
})

const port: number=config.get('port')
app.listen(()=>{
    console.log(`Listenning port:${port}`)
})