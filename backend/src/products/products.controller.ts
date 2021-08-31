import { Controller, Get, Query } from "@nestjs/common"
import { ProductsService } from './products.service'

@Controller('products')
export class ProductsController{
    constructor(private productsService: ProductsService) {}

    @Get()
    async getProducts(@Query() query: Record<string, any>): Promise<object>{
        const products = await this.productsService.getProducts(query)
        
        return products
    }
}