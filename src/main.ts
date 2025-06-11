import { NestFactory } from '@nestjs/core';
import { CoffesModule } from './modules/coffes/coffes.module';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(CoffesModule);
  app.enableShutdownHooks(); // necessário para o PrismaService funcionar corretamente no shutdown
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

