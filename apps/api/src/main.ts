import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    snapshot: true,
  });

  // Validation

  app.useGlobalPipes(new ValidationPipe());

  // Static Files
  app.useStaticAssets('public');

  // Cors
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  });

  // Versioning
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });

  // Swagger UI
  const options = new DocumentBuilder()
    .setTitle('Wishop')
    .setDescription('Wishop API Documentation')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('docs', app, document, {
    customfavIcon: 'https://cdn-icons-png.flaticon.com/512/1147/1147805.png',
    customSiteTitle: 'Wishop API Docs',
    customCss: `
    .topbar-wrapper img {content:url('https://placeholderlogo.com/img/placeholder-logo-2.png'); width:200px; height:auto;}
    .swagger-ui .topbar { background-color: #002fd1; } `,
  });

  await app.listen(process.env.port || 5001);
}
bootstrap();
