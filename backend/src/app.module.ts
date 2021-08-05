import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"
import * as dotenv from 'dotenv'

import { AppController } from './app.controller'
import { AppService } from "./app.service"
import { ProductsModule } from './products/products.module'
import { PostsModule } from './posts/posts.module'

dotenv.config()

@Module({
    imports: [
        ProductsModule,
        PostsModule,
        MongooseModule.forRoot(
            `mongodb+srv://${process.env.MONGODB_LOGIN}:${process.env.MONGODB_PASSWORD}@fashionblog.ehsqf.mongodb.net/fashionBlog`
        ),
    ],
    controllers: [AppController],
    providers: [AppService]
})

export class AppModule{}