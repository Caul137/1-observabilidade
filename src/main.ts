import {sdk} from "./tracer"

sdk.start();

import {log} from "./infra/logger"

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000).then(() => (
    log.info('Aplicacao subiu')
  )).catch(() => {
    log.error('Aplicacao não subiu')
  })
}
bootstrap();
