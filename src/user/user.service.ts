import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRespository: Repository<User>){}
    async findAll():Promise<User[]> {
        return await this.userRespository.find({
            select: ['id', 'firstName', 'lastName', 'email', 'status', 'createdAt', 'updatedAt']
        })
    }

    async findOne(id: number): Promise<User> {
        return await this.userRespository.findOneBy({id});
    }

    async create(createUserDto: CreateUserDto): Promise<User> {
        const hashPassword = await bcrypt.hash(createUserDto.password, 10);
        return await this.userRespository.save(createUserDto);
    }

    async update(id:number, updateUserDto: UpdateUserDto):Promise<UpdateResult> {
        return await this.userRespository.update(id, updateUserDto);
    }

    async delete(id: number): Promise<DeleteResult> {
        return await this.userRespository.delete(id);
    }
}
