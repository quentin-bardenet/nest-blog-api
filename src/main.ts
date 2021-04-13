import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {Logger} from '@nestjs/common';

const logger = new Logger();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(process.env.PORT || 3030);
  logger.log('App is listening on port 3030');
}
bootstrap();
