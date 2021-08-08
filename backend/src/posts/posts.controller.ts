import { Controller, Get, Param } from "@nestjs/common"
import { PostsService } from './posts.service'

@Controller('posts')
export class PostsController{
    constructor(private postsService: PostsService) {}

    @Get()
    async getPosts(){
        const posts = await this.postsService.getPosts()
        return posts
    }
    
    @Get(`:id`)
    getPost(@Param('id') postId: string){
        return this.postsService.getSinglePost(postId)
    }
}