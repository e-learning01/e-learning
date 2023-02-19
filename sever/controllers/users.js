const  {deleteUser,findAll,findOne,createOne,signIn,UpdateUser} = require("../model/mainSchema")
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
        if(req.user.idusers!==parseInt(req.params.id)) {res.sendStatus(401)}
        else {
        try {
            const user = await findOne(req.params.id)
        res.send(user)
        }
        catch(err) {
            res.send([])
        }
    }
    },
    addOneUser : async (req,res)=> {
        try {
         const response = await createOne(req.body)
           res.send(response)
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
            res.cookie("access_token",token,{httpOnly:false,domain:'/',sameSite: "none"})
            res.status(200).send({token})
           }
           else {
           res.send(response) 
        }
           }
           catch(err) {
               res.send(err)
           }
    },
    HandleUpdateUser : async (req,res) => {
        if(req.user.idusers!==parseInt(req.params.id)) {res.sendStatus(401)}
        
        else {
            try {
          const user = await UpdateUser(req.body,req.user.idusers) 
          res.send(user)  
        
            }
            catch(err) {
               console.log(err)
    }
}
    },
    DelteUser : async (req,res) => {
        console.log(req.user.idusers , " : ", req.params.id)
        if(req.user.idusers!==parseInt(req.params.id)) {res.sendStatus(401)}
        else {
        try {
             await deleteUser(req.params.id) 
            res.sendStatus(200)  
          
              }
              catch(err) {
                 console.log(err)
      }   
    }
    }
}