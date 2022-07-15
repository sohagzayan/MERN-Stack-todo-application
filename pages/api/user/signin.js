import Pending from "../../../models/pending"
import User from "../../../models/user"
import bcrypt from 'bcrypt'
import dbConnection from '../../../utility/dbConnection';
import {sendConfirmationEmail} from '../../../utility/sendEmail'
export default async function user(req , res){
        const {method} = req
        dbConnection()
       if(method == "POST"){
           try {
                        const verifiedUser = await  User.find({email : req.body.email})
                        const pendingUser = await  Pending.find({email : req.body.email})

                         if(verifiedUser.length > 0 ) {
                           return res.send({message : 'This User already verified !'})  
                         }      

                         if(pendingUser.length > 0 ) {
                           return res.send({message : 'already sent confirmation email please check and active your account !'})  
                         }      

                        const hashedPassword = await bcrypt.hash(req.body.password , 10)
                        const newUser = await Pending({
                                email : req.body.email,
                                name : req.body.name,
                                lastName : req.body.lastName,
                                mobile : req.body.mobile,
                                password : hashedPassword
                        })
                        await newUser.save()
                        // console.log(newUser._id)
                        await sendConfirmationEmail({toUser : newUser , hash : newUser._id})
                        res.status(200).json({message : "Successfully Sign in User and Email Send Your email" , newUser : newUser})
                } 
                        catch (error) {
                        res.status(500).json(error) 
                }     
       }
}