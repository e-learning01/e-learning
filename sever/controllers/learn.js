
const {addItem,deleteItem,getItem} =require("../model/learnSchema")




module.exports= {
    addItems : async (req,res) => {
        try{
            const items = await addItem(req.body) ;
            res.send(items)
        } 
            catch(err) {
                res.send([])
            } 
    },
    deleteItems : async (req,res) => {
        try{
            const items = await deleteItem(req.body.iduser) ;
            res.sendStatus(200).send(items)
        } 
            catch(err) {
                res.sendStatus(404).send([])
            } 
    },
    getItems : async (req,res) => {
        try{
            const items = await getItem() ;
            res.send(items)
        } 
            catch(err) {
                res.send([])
            } 
    }



}
