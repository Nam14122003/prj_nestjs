import { BadRequestException, Body, Controller, Delete, Get, Param, ParseArrayPipe, Patch, Post, Query, Req, SetMetadata, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FillterUserDto } from './dto/fillter-user.dto';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiQuery, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { storageConfig } from 'helpers/config';
import { extname } from 'path';
import { Roles } from 'src/auth/decorator/role.decorator';

@ApiBearerAuth()
@ApiTags('Users')
@Controller('users')
export class UserController {
    constructor(private userService: UserService){}

    @Roles('Admin')
    @ApiQuery({name:'page'})
    @ApiQuery({name:'itemsPerPage'})
    @ApiQuery({name:'search'})
    @Get()
    findAll(@Query() query: FillterUserDto):Promise<User[]> {
        return this.userService.findAll(query);
    }

    @Get('profile')
    profile(@Req() req: any): Promise<User> {
        return this.userService.findOne(Number(req.user_data.id))
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<User> {
        return this.userService.findOne(Number(id));
    }

    // @SetMetadata('roles', ['Admin'])
    @Roles('Admin')
    @Post('register')
    create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.userService.create(createUserDto);
    }

    @Roles('Admin')
    @Patch(':id')
    update(@Param('id') id:string, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(Number(id), updateUserDto);
    }

    @Roles('Admin')
    @Delete('multiple')
    multipleDelete(@Query('ids', new ParseArrayPipe({items: String, separator: ','})) ids: string[]) {
        console.log("delete multi=> ",ids);
        return this.userService.mutipleDelete(ids)
    }

    @Roles('Admin')
    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.userService.delete(Number(id));
    }

    @ApiConsumes('multipart/form-data')
    @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        }
      }
    },
    })
    @Post('upload-avatar')
    @UseInterceptors(FileInterceptor('avatar', {
        storage: storageConfig('avatar'), 
        fileFilter:(req, file, cb) => {
            const ext = extname(file.originalname);
            const allowedExtArr = ['.jpg', '.png', '.jpeg'];
            if(!allowedExtArr.includes(ext)) {
                req.fileValidationError = `Wrong extension type. Acept file ext are: ${allowedExtArr.toString()}`;
                cb(null, false);
            }
            else {
                const fileSize = parseInt(req.headers['content-length']);
                if(fileSize > 1024 * 1024 * 5) {
                    req.fileValidationError = 'File size is too large. Acept fize size is lass than 5 MB';;
                    cb(null, false);
                }
                else {
                    cb(null, true);
                }
            }
        }
    }))
    uploadAvatar(@Req() req: any, @UploadedFile() file: Express.Multer.File) {
        if(req.fileValidationError) {
            throw new BadRequestException(req.fileValidationError);
        }
        if(!file) {
            throw new BadRequestException('File is required!')
        }
        this.userService.updateAvatar(req.user_data.id, file.fieldname+'/'+file.fieldname);
    }
}
