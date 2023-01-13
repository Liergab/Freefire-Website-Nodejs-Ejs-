const express = require('express');
const router = express.Router();
const Crud = require('../services/CollectionCrud')

const{
    create,
    retrieve,
    update,
    Delete

} = Crud()
router.get('/home', (req,res) =>{
    res.render("index.ejs")
})

router.get('/retrieve', async (req, res , next) =>{
    try {
        const colList = retrieve()
        res.render('index.ejs',{
            colData:colList
        })

        
    } catch (error) {
        console.log("retrive error:", error)
        res.status(500).json({status:"retrieve error"})
        
    }
       
})

router.post('/create', async (req, res , next) =>{
    const {colImage, colTitle, colDescription} = req.body
    try {
        const isCreated = await create ({colImage, colTitle, colDescription});
        
        if(isCreated){
            res.status(200).json({message:"Successfully Created", data:isCreated})
        }else{
            res.status(500).json({message:"Not Created"})
        }
        
    } catch (error) {
        console.log('create Route error: ', error)
        res.status(500).send({ status :"not create"})
    }
})

router.put('/update', async (req, res , next) =>{
    const {id, colImage, colTitle, colDescription} = req.body
    try {
        const isUpdated = await update ({id, colImage, colTitle, colDescription});
        if(isUpdated){
            res.status(200).json({message:"Successfully Updated", data:isUpdated})
        }else{
            res.status(500).json({message:"Not Updated"})
        }
        
    } catch (error) {
        console.log('Update Route error: ', error)
        res.status(500).send({ message:"not updated"})
    }
})


router.get('/delete', async (req, res , next) =>{
    const{id}  = req.query
    try {
        const isDeleted = await Delete (id);
        if(isDeleted){
            res.status(200).json({message:"Successfully deleted", data:isDeleted})
        }else{
            res.status(500).json({message:"Not Delete"})
        }
        
    } catch (error) {
        console.log('Delete Route error: ', error)
        res.status(500).send({ message:"Error"})
    }
})

module.exports = router