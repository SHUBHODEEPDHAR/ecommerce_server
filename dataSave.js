import Products from "./Model/ProductsSchema.js"
import DataBase from "./Database/Db.js";

export const DataSave=async()=>{
    try {
        await Products.deleteMany({});
        await Products.insertMany(DataBase);
        console.log("DataBase saved to the mongo.db successfully ")
    } catch (error) {
        console.log("DataBase don't save or Products schema is missing ", error.message)
    }
}
