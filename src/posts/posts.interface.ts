import { Document } from 'mongoose';

interface PostsModel {
    title: string,
    detail: string,
    createdAt: Date,
    updatedAt: Date,
    nbLike: number,
    image: string,
}

export interface Posts extends PostsModel, Document {}