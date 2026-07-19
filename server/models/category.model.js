import mongoose from "mongoose";
import { type } from "node:os";

const categoryschema = new mongoose.Schema({

    name :{
        type:String,
        require:true,
        unique :true
    }
})

const Category = mongoose.model("Category",categoryschema);

export default Category