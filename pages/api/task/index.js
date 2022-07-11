import dbConnection from './../../../utility/dbConnection';
import TaskSchema from '../../../models/task';

export default async function task(req , res){
     const {method} = req
     console.log(req.query)
     dbConnection()
        if(method  === "POST"){
          const newTask = await TaskSchema(req.body) 
          await newTask.save()
          res.send(newTask)
        
        }else if(method  === "GET"){
          const getAllTask = await TaskSchema.find({taskStatus : req.query.statusType})
          res.send(getAllTask)      
        }
}