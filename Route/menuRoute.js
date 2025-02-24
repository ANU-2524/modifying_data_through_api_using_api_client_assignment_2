const express = require("express") ;
const router = express.Router() ;
const menuModel = require("../Model/menuModel") ;

router.get("/" , async(req , res)=>{
    try{
        const menuItem = await menuModel.find();
        res.status(200).json(menuItem) ;
    }
    catch(error){
        console.erroe("Error fetching menu Items" , error.message) ;
        res.status(500).json({error : "Internal Server Error"}) ;
    }
})

router.put("/:id" , async (req , res)=>{
    try{
        const updatedItem = await menuModel.findByIdAndUpdate(req.params.id , req.body , {new : true }) ;
        if (!updatedItem){
            return res.status(404).json({error : "Menu Item not found."})
        }
        res.json(updatedItem) ;
    }
    catch(error){
        res.status(500).json({error : "Internal Server Error"}) ;
    }
})

router.delete("/:id" , async(req , res)=>{
    try{
        const deleteItem = await menuModel.findByIdAndDelete(req.params.id ) ;
        if (!deleteItem) {
            return res.status(404).json({error : "Menu Item not found."})
        }
        res.status(200).json({Message : "Menu Item deleted Successfully."})
    }
    catch(error){
        res.status(500).json({ error: "Failed to delete menu item" });
    }
})

module.exports = router ; 