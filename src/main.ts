import { NestFactory } from '@nestjs/core';
import { ApiModule } from './modules/api/api.module';
import { UserModule } from './modules/user/user.module';
import { SwaggerModule } from '@nestjs/swagger/dist/swagger-module';
import { DocumentBuilder } from '@nestjs/swagger/dist/document-builder';

async function bootstrap() {
  const app = await NestFactory.create(ApiModule);
  ///Swagger

  const swagger = new DocumentBuilder()
    .setTitle('NestApp v1')
    .setDescription('OpenAPI documentation for GeekPersonalReview')
    .setVersion('1.0')
    .addTag('NestJs')
    .build();
  //await SwaggerModule.loadPluginMetadata(metadata);
  const document = SwaggerModule.createDocument(app, swagger);
  SwaggerModule.setup('api-docs', app, document);
  ///Swagger

  await app.listen(3001);
}
bootstrap();
