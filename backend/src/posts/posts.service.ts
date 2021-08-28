import { Injectable, NotFoundException, Query } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from 'mongoose'

import { Post } from './post.model'

@Injectable()
export class PostsService{
    constructor(
        @InjectModel('Post') private readonly postModel: Model<Post>,
    ){}

    async getPosts(@Query() query: Record<string, any>): Promise<object> {
        const posts = query ? 
            await this.postModel.find().sort('-date').limit(Number(query.fetchLength)).exec() 
            : 
            await this.postModel.find().exec()
        

        return posts.map(post =>({
            id: post.id,
            title: post.title,
            subtitle: post.subtitle,
            author: post.author,
            tags: post.tags,
            image: post.image,
            date: post.date,
            readingLength: post.readingLength,
            likes: post.likes,
            views: post.views,
            comments: post.comments,
            content: post.content,
        }))
    }

    async getSinglePost(postId: string){
        const post = await this.findPost(postId)

        return{
            ...post
        }
    }

    async likePost(postId: string){
        const post = await this.findPost(postId)

        post.likes++

        post.save()
        return{
            ...post
        }
    }

    private async findPost(id: string): Promise<Post>{
        let post

        try {
            post = await this.postModel.findById(id).exec()
        } catch (error) {
            throw new NotFoundException('Could not find the Post.')
        }
        if(!post){
            throw new NotFoundException('Could not find the Post.')
        }
        return post
    }
}
