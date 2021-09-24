import config from 'config';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import {
  APP_SERIALIZER_OPTIONS,
  APP_VALIDATION_PIPE_OPTIONS,
  DEFAULT_APP_API_PORT,
} from '@app/constants';

const port = config.APPS.API.PORT || DEFAULT_APP_API_PORT;
const appPrefix = `${config.APPS.API.PREFIX}/v1`;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.setGlobalPrefix(appPrefix);

  app.use(cookieParser());
  app.use(helmet());

  app.useGlobalPipes(new ValidationPipe(APP_VALIDATION_PIPE_OPTIONS));
  app.useGlobalInterceptors(
    new ClassSerializerInterceptor(app.get(Reflector), APP_SERIALIZER_OPTIONS),
  );

  await app.listen(port);
}

bootstrap();
