import mongoose from 'mongoose'

const token = new mongoose.Schema({
        userId : {
                type : Number,
                required : true,
                unique : true
        },
        token : {
                type : String ,
                required : true
        },
        createdAt: { type: Date, default: Date.now, expires: 3600 },
})

export default mongoose.models.Token || mongoose.model("Token" , token)