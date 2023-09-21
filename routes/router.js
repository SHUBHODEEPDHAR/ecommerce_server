import express, { response } from 'express';
import mongoose from 'mongoose';
import Products from '../Model/ProductsSchema.js';
import { addPaymentGateway, paymentResponse } from '../controller/paymentController.js';
import { addUser, getUser, removeUser } from '../controller/userController.js';

export const router= express.Router();

router.get("/products",async(request,response)=>{
    
    try {
        const Product= await Products.find();
    response.status(200).json(Product);
    } catch (error) {
        response.status(500).json(error.message)
    }
})


router.get("/products/get",async(request,response)=>{
    
    try {
        const Product= await Products.find(request.query);
    response.status(200).json(Product);
    } catch (error) {
        response.status(500).json(error.message)
    }
})
router.get("/products/:type",async(request,response)=>{
    
    try {
        const type = request.params.type;
        const Product= await Products.find(
            {"type":type}
        );
    
    response.status(200).json(Product);
    } catch (error) {
        response.status(500).json(error.message)
    }
})

router.get("/products/:id", async(request,response)=>{
    try {
        const id=request.params.id;
        const Product= await Products.findOne({"id":id});
        response.status(200).json(Product)
        
    } catch (error) {
        response.status(500).json(error.message)
    }
})

router.get("/products/get/:id",async(request, response)=>{
    try {
        const id=request.params.id;
        const Product = await Products.find({"id":id});
        response.status(200).json(Product)
    } catch (error) {
        response.status(500).json(error.message)
    }
})


router.post('/payment', addPaymentGateway);
router.post('/callback', paymentResponse);

router.post("/Signup",addUser);
router.get("/getUser/:id",getUser)
router.post("removeUser/:id",removeUser)

export default router;