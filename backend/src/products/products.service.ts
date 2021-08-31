import { Injectable, Query } from "@nestjs/common"
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { Product } from './product.model'

@Injectable()
export class ProductsService {
    constructor(
        @InjectModel('Product') private readonly productModel: Model<Product>,
    ){}

    async getProducts(@Query() query: Record<string, any>): Promise<object> {
        const products = query ? 
            await this.productModel.find().limit(Number(query.fetchLength)).exec()
            :
            await this.productModel.find().exec()
        
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