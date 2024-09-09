import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post, Query, Req, UploadedFile, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { storageConfig } from 'helpers/config';
import { AuthGuard } from 'src/auth/auth.guard';
import { extname } from 'path';
import { PostService } from './post.service';
import { FilterPostDto } from './dto/filter-post.dto';
import { Post as PostEntity} from "./entities/post.entity"
import { UpdatePostDto } from './dto/update-post.dto';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
@ApiBearerAuth()
@ApiTags('Posts')
@Controller('posts')
export class PostController {
    constructor(private postService: PostService){}
    @UseGuards(AuthGuard)
    @UsePipes(ValidationPipe)
    @Post()
    @ApiConsumes('multipart/form-data')
    @ApiBody({
    schema: {
      type: 'object',
      properties: {
        title: {type: 'string'},
        description: {type: 'string'},
        file: {
          type: 'string',
          format: 'binary',
        },
        status: {type: 'number'}
      }
    },
    })
    @UseInterceptors(FileInterceptor('thumbnail', {
        storage:storageConfig('post'),
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
    create(@Req() req: any, @Body() createPostDto: CreatePostDto, @UploadedFile() file: Express.Multer.File) {
        if(req.fileValidationError) {
            throw new BadRequestException(req.fileValidationError);
        }
        if(!file) {
            throw new BadRequestException('File is required!')
        }
        return this.postService.create(req['user_data'].id, {...createPostDto, thumbnail:file.destination + '/' + file.filename});
    }

    @UseGuards(AuthGuard)
    @Get()
    findAll(@Query() query: FilterPostDto): Promise<any> {
        return this.postService.findAll(query);
    }

    @UseGuards(AuthGuard)
    @Get(':id')
    findDetail(@Param('id') id: string):Promise<PostEntity> {
        return this.postService.findDetail(Number(id));
    }

    @UseGuards(AuthGuard)
    
    @Patch(':id')
    @UseInterceptors(FileInterceptor('thumbnail', {
        storage:storageConfig('post'),
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
    update(@Param('id') id: string, @Req() req: any, @Body() updatePostDto: UpdatePostDto, @UploadedFile() file: Express.Multer.File) {
        if(req.fileValidationError) {
            throw new BadRequestException(req.fileValidationError);
        }
        if(file) {
            updatePostDto.thumbnail =  + 'post/' + file.filename;
        }

        return this.postService.update(Number(id), updatePostDto);
    }

    @UseGuards(AuthGuard)
    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.postService.delete(Number(id));
    }


    // Upload image in description
    @Post('cke-upload')
    @UseInterceptors(FileInterceptor('upload', {
        storage:storageConfig('ckeditor'),
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

    ckeUpload(@Body() data: any, @UploadedFile() file: Express.Multer.File) {
        return {
            'url':`ckeditor/${file.filename}`
        }
    }
}
