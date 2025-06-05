import { NestFactory } from '@nestjs/core';
import { CoffesModule } from './modules/coffes/coffes.module';


async function bootstrap() {
  const app = await NestFactory.create(CoffesModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
