import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './entities/post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(User) private useRepository: Repository<User>,
        @InjectRepository(Post) private postRepository: Repository<Post>
    ){}
    async create(userId: number, createPostDto: CreatePostDto): Promise<Post> {
      const user = await this.useRepository.findOneBy({id: userId});
      
      try {
        const res = await this.postRepository.save({
            ...createPostDto, user
        })

        return await this.postRepository.findOneBy({id: res.id})
      }
      catch(error) {
        console.log(error);
        throw new HttpException('Cannot create post', HttpStatus.BAD_REQUEST)
      }
    }
}
