import * as mongoose from 'mongoose';

export const PostsSchema = new mongoose.Schema({
    title: String,
    detail: String,
    createdAt: Date,
    updatedAt: Date,
    nbLike: Number,
    image: String,
});