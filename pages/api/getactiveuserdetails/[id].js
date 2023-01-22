import dbConnection from '../../../utility/dbConnection';
import TaskSchema from '../../../models/task';
import UserSchema from '../../../models/user';

export default async function task(req , res){
     const {method , query} = req
     console.log(query)
     dbConnection()
        if(method  === "GET"){
            const getAllTask = await UserSchema.find({_id : query.id}).populate('tasks')
          res.send(getAllTask)
        
        }
}


