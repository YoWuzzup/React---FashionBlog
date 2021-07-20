import { Controller, Post, Body, Get, Param, Patch, Delete } from "@nestjs/common"
import { ProductsService } from './products.service'

@Controller('/products')
export class ProductsController{
    constructor(private productsService: ProductsService) {}

    @Get()
    async getAllProducts(){
        const products = await this.productsService.getProducts()
        return products
    }
}