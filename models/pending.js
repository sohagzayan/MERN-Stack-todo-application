import mongoose from 'mongoose'

const pending =  mongoose.Schema({
        email : {
                type : String,
                required : true
        },
        name : {
                type : String,
                required : true
        },
        lastName : {
                type : String,
                required : true
        },
        mobile : {
                type : String,
                required : true
        },
        password : {
                type : String,
                required : true
        },
        verified : {
                type : Boolean,
                default : false
        }
})

export default mongoose.models.Pending || mongoose.model('Pending' , pending)