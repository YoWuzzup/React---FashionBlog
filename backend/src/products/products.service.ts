import { Injectable } from "@nestjs/common"
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { Product } from './product.model'

@Injectable()
export class ProductsService {
    constructor(
        @InjectModel('Product') private readonly productModel: Model<Product>,
    ){}

    async getProducts(){
        const products = await this.productModel.find().exec()
        
        return products.map(prod =>({
            id: prod.id,
            title: prod.title,
            description: prod.description,
            price: prod.price,
            image: prod.image,
            itemsQuality: prod.itemsQuality
        }))
    }
}