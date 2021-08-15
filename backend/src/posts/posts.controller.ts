import { Controller, Get, Param, Query } from "@nestjs/common"
import { PostsService } from './posts.service'

@Controller('posts')
export class PostsController{
    constructor(private postsService: PostsService) {}

    @Get()
    async getPosts(@Query() query: Record<string, any>): Promise<object>{
        const posts = await this.postsService.getPosts(query)
        
        return posts
    }
    
    @Get(`:id`)
    getPost(@Param('id') postId: string){
        return this.postsService.getSinglePost(postId)
    }
}