import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './controllers/product/product.controller';
import { ProductService } from './services/product/product.service';
import { PrismaService } from './services/prisma/prisma.service';
import { RedirectMiddleware } from './midllewares/redirect.middleware';

@Module({
  imports: [],
  controllers: [AppController, ProductController],
  providers: [AppService, ProductService, PrismaService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(RedirectMiddleware)
            .forRoutes('/');
    }
}
