import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { ConfigModule } from '@nestjs/config';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Category]),
    ConfigModule,
    TypeOrmModule.forFeature([User])
  ],
  controllers: [CategoryController],
  providers: [CategoryService]
})
export class CategoryModule {}
