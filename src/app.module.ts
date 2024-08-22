import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptios } from 'db/data-source';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { PostModule } from './post/post.module';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptios), UserModule, AuthModule, ConfigModule.forRoot(), PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
