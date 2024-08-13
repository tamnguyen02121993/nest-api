import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use((req, _, next) => {
    console.log("Request invoked: ", req.originalUrl)
    next();
  })
  await app.listen(8080);
}
bootstrap();
