import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './entities/post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Like, Repository, UpdateOptions, UpdateResult } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { FilterPostDto } from './dto/filter-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

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

    async findAll(query: FilterPostDto):Promise<any> {
        const itemPerPage = Number(query.itemPerPage) || 10;
        const page = Number(query.page) || 1;
        const search = query.search || '';

        const skip = (page - 1) * itemPerPage;
        const[res, total] = await this.postRepository.findAndCount({
            where: [
                {title: Like('%' + search + '%')},
                {description: Like('%' + search + '%')}   
            ],
            order: {createdAt: 'DESC'},
            take: itemPerPage, 
            skip: skip,
            relations: {
                user: true
            },
            select: {
                user: {
                    id: true,
                    firstName: true,
                    lastName: true,
                    email: true, 
                    avatar: true
                }             
            }
        })

        const lastPage = Math.ceil(total/itemPerPage);
        const nextPage = page + 1 > lastPage ? null : page + 1;
        const prevPage = page - 1 < 1 ? null : page - 1;

        return {
            data: res,
            total,
            currenPage: page,
            nextPage,
            prevPage,
            lastPage
        }
    }

    async findDetail(id: number): Promise<Post> {
        return await this.postRepository.findOne({
            where: {id},
            relations: ['user'],
            select: {
                user: {
                    id: true,
                    firstName: true,
                    lastName: true,
                    email: true,
                    avatar: true
                }
            }
        })
    }

    async update(id: number, updatePostDto: UpdatePostDto): Promise<UpdateResult> {
        return await this.postRepository.update(id, updatePostDto)
    }

    async delete(id: number): Promise<DeleteResult> {
        return await this.postRepository.delete(id);
    }
}
