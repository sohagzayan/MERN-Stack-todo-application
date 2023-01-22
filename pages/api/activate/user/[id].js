import Pending from "../../../../models/pending"
import User from "../../../../models/user"
import dbConnection from "../../../../utility/dbConnection"
export default async function user(req , res){
        const {method ,query} = req
        dbConnection()
       if(method == "GET") {
                const alreadyVerified = await User.find({_id : query.id})
                if(alreadyVerified.length > 0){
                      return res.send({message : "this user already verify"})    
                }
                const pendingUser = await Pending.findOne({_id : query.id})
                const {email , name , lastName , mobile , password} = pendingUser
                const verifyUser = await User({email , name , lastName , mobile , password , verified : true})
                await verifyUser.save()
                await pendingUser.remove();
                res.send("successfully verify");
        }
}

