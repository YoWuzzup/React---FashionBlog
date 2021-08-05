import * as mongoose from 'mongoose'

export const PostSchema = new mongoose.Schema({
    title: String,
    subtitle: String,
    author: String,
    date: Date,
    tags: Array,
    readingLength: Number,
    image: String,
    likes: Number,
    views: Number,
    comments: Array,
    content: Array,
})

export interface Post extends mongoose.Document{
    id: string,
    title: string,
    subtitle: string,
    author: string,
    date: number,
    readingLength: number,
    image: string,
    likes: number,
    views: number,
    comments: Array<string>,
    tags: Array<string>,
    content: Array<string>,
}