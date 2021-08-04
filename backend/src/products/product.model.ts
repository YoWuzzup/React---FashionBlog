import * as mongoose from 'mongoose'

export const ProductSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    image: String,
    itemsQuality: Number
})

export interface Product extends mongoose.Document{
    id: string,
    title: string,
    description: string,
    price: number,
    image: string,
    itemsQuality: number
}