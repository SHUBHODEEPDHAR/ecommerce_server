import mongoose, { Schema } from "mongoose";

const ProductsSchema =new Schema ({
    id:String,
    name:String,
    longName:String,
    productName:String,
    catogory:String,
    type:String,
    Brand:String,
    modle:String,
    featured:Boolean,
    stock:String,
    quantity:String,
    image:Object,
    reating:Object,
    customerReview:String,
    discount:String,
    cost:Number,
    price:Number,
    frontDetails:Array,
    color:String,
    Storage:String,
    monthlyEmi:Number,
    Highlights:Object,
    OtherDetails:Object,
    warrenty:String,
    Description:String,
    size:String,
    AvailableOffer:Array,
    ProductDetails:Object,
})

const Products = mongoose.model("Products",ProductsSchema);

export default Products;