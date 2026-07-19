import mongoose from "mongoose";
import { type } from "node:os";
import { ref } from "node:process";

const cartSchema = new mongoose.Schema({

    product :{

        type:mongoose.Schema.Types.ObjectId,
        ref :"Product",
        require:true,
    },

    user :{

        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        require:true
    },

    
    quantity:{

        type:Number,
        require:true,
        default:1
    }
})

const Cart = mongoose.model("Cart",cartSchema);

export default Cart