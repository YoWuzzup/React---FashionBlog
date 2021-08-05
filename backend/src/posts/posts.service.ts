import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from 'mongoose'

import { Post } from './post.model'

@Injectable()
export class PostsService{
    constructor(
        @InjectModel('Post') private readonly postModel: Model<Post>,
    ){}

    async getPosts(){
        const posts = await this.postModel.find().exec()

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
}
