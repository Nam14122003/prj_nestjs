import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { query } from 'express';
import { FillterUserDto } from './dto/fillter-user.dto';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Users')
@Controller('users')
export class UserController {
    constructor(private userService: UserService){}
    @UseGuards(AuthGuard)
    @ApiQuery({name:'page'})
    @ApiQuery({name:'itemsPerPage'})
    @ApiQuery({name:'search'})
    @Get()
    findAll(@Query() query: FillterUserDto):Promise<User[]> {
        return this.userService.findAll(query);
    }

    @UseGuards(AuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string): Promise<User> {
        return this.userService.findOne(Number(id));
    }

    @UseGuards(AuthGuard)
    @Post('register')
    create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.userService.create(createUserDto);
    }

    @Put(':id')
    update(@Param('id') id:string, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(Number(id), updateUserDto);
    }

    @UseGuards(AuthGuard)
    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.userService.delete(Number(id));
    }
}
