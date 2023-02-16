const  {findAll,findOne,createOne,signIn} = require("../model/mainSchema")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
dotenv.config()
module.exports= {
    HandleFindUser : async (req,res) => {
        try{
            const users = await findAll() ;
            res.send(users)
        } 
            catch(err) {
                res.send([])
            } 
    },
    HandleOneUser : async (req,res) => {
        try {
            const user = await findOne(req.params.id)
        res.send(user)
        }
        catch(err) {
            res.send([])
        }
    },
    addOneUser : async (req,res)=> {
        try {
         await createOne(req.body)
           res.send("created")
        }
        catch(err) {
            res.send(err)
        }        
    },
    checkUser : async (req,res) => {
        try {
           const  response =  await signIn(req.body)  
           if (typeof response === "object") {
            const token = jwt.sign(response,process.env.JWT_SECRET,{expiresIn:'1h'})        
            res.cookie("access_token",token,{httpOnly:true}).status(200).send(response)
           }
           else {
           res.send(response) 
        }
           }
           catch(err) {
               res.send(err)
           }
    }
}