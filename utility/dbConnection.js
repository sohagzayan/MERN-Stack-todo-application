import mongoose from 'mongoose'


let cashed = global.promise

if(!cashed){
   cashed = global.promise = {conn : null , promise : null}     
}

const  dbConnection = async()=>{
        if(cashed.conn){
         console.log('old connect success')
         return cashed.conn
        }
        const opt = {}
        if(!cashed.promise){
             cashed.promise = mongoose.connect(process.env.MONGODB_URL, opt).then((mongoose)=> mongoose)   
        }
        console.log('new connect success')
        cashed.conn = await cashed.promise
        return cashed.conn 
}

export default dbConnection