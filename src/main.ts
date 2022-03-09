import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { dbInit } from './database/init';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  dbInit();
}
bootstrap();
