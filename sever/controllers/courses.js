const  {findAll,findOne,addBook} = require("../model/CourseSchema")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
dotenv.config()
module.exports= {
    HandleFindCourses : async (req,res) => {
        try{
            const books = await findAll() ;
            res.send(books)
        } 
            catch(err) {
                res.send([])
            } 
    },
    HandleOnebook : async (req,res) => {
    
        try {
            const book = await findOne(req.params.id)
        res.send(book)
        }
        catch(err) {
            res.send([])
        }}
    ,
    addOneBook : async (req,res)=> {
        try {
       const res =  await addBook(req.body)
           res.send(res)
        }
        catch(err) {
            res.send(err)
        }        
    },
    
}