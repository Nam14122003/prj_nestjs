import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express'; //Thêm phần này cho phần static file

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule); //Thêm phần này cho phần static file
  const config = new DocumentBuilder()
  .setTitle('Blog Api')
  .setDescription('The list API for simple blog')
  .setVersion('1.0')
  .addTag('Auth')
  .addTag('Users')
  .addBearerAuth()
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);
  app.enableCors(); // Nếu không có sẽ báo lỗi khi call API từ React
  app.useStaticAssets(join(__dirname, '../uploads'));
  await app.listen(3000);
}
bootstrap();
