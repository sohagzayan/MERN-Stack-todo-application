import jwt from 'jsonwebtoken'

const authGard = (handler)=>{
        return async (req , res)=>{
                const {authorization} = req.headers
                const token = authorization.split(' ')[1]   
                const decoded =  jwt.verify(token , process.env.JWT_SECRET)
                const {userId , fastName , lastName} = decoded
                req.userId = userId
                req.fastName = fastName
                return handler(req , res)
        } 
}

export default authGard