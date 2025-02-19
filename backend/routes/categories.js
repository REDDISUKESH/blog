const express=require('express');
const router=express.Router()
const Category=require('../models/Category')

router.post("/",async(req,res)=>{
    const newCat=new Category(req.body);
    try{
        const savedCat=await newCat.save()
        res.status(200).json({message:'category saved'})
    }catch(err)
    {
        res.status(500).json({message:'No category'})
    }
})
router.get('/',async(req,res)=>{
    try{
        const cats=await Category.find()
        res.status(200).json(cats)
    }catch(err)
    {
        res.status(500).json(err)
    }
})
module.exports=router;