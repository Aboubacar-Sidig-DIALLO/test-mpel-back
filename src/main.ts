import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggingInterceptor } from './midllewares/logging.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new LoggingInterceptor()); // Enregistrer l'interceptor globalement
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
