import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PostsDto } from './posts.dto';
import { Posts } from './posts.interface';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post('')
  createPost(@Body() post: PostsDto): Promise<Posts> {
    return this.postsService.create(post);
  }

  @Get('')
  getPosts(): Promise<Posts[]> {
    return this.postsService.findAll();
  }

  @Get(':id')
  getPostById(@Param('id') postId: string) {
    return this.postsService.findById(postId);
  }

  @Patch(':id')
  updatePost(
    @Param('id') postId: string,
    @Body() newPost: PostsDto,
  ): Promise<Posts> {
    return this.postsService.updatePost(postId, newPost);
  }

  @Patch('/vote/:id')
  voteUpPost(@Param('id') postId: string): Promise<Posts> {
    return this.postsService.voteUp(postId);
  }
}
