import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PostsDto } from './posts.dto';
import { Posts } from './posts.interface';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel('Posts') private readonly postsModel: Model<Posts>,
  ) {}

  async create(post: PostsDto): Promise<Posts> {
    post.createdAt = new Date();
    post.nbLike = 0;
    const createdPost = new this.postsModel(post);
    return await createdPost.save();
  }

  async findAll(): Promise<Posts[]> {
    return this.postsModel.find();
  }

  async updatePost(postId: string, newPost: PostsDto): Promise<Posts> {
    return this.postsModel.findByIdAndUpdate(postId, newPost, {
      new: true,
    });
  }

  async voteUp(postId: string): Promise<Posts> {
    return this.postsModel.findByIdAndUpdate(
      postId,
      {
        $inc: { nbLike: 1 },
      },
      {
        new: true,
      },
    );
  }

  async findById(postId: string): Promise<Posts> {
    return this.postsModel.findById(postId);
  }
}
