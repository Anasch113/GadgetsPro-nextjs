import mongoose, { Schema } from "mongoose";

const productModel = new Schema({
    name: String,
    Color: String,
    Company: String,
    Price: String,
    Category: String,
});
export const Product =mongoose.models.products || mongoose.model("products", productModel)