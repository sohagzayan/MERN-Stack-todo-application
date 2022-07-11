import dbConnection from './../../../utility/dbConnection';
import TaskSchema from '../../../models/task';

export default async function task(req , res){
     const {method , query} = req
     console.log(query)
     dbConnection()
        if(method  === "PUT"){

          const newTask = await TaskSchema.findByIdAndUpdate(query.id , req.body)
          res.send(newTask)
        
        }else if(method  === "GET"){
          const getAllTask = await TaskSchema.find()
          res.send(getAllTask)      
        }else if(method  === "DELETE"){
          const deleteTask = await TaskSchema.findByIdAndDelete(query.id)
          res.send(deleteTask)
        }
}