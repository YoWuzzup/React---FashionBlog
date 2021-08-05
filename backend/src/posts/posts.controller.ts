import { Controller, Get } from "@nestjs/common"
import { PostsService } from './posts.service'

@Controller('posts')
export class PostsController{
    constructor(private postsService: PostsService) {}

    @Get()
    async getPosts(){
        const posts = await this.postsService.getPosts()
        return posts
    }
}