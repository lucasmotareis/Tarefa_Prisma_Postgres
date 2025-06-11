import { Module } from '@nestjs/common';

import { PrismaService } from './prisma/prisma.service';
import { CoffesService } from './modules/coffes/coffes.service';
import { CoffesController } from './modules/coffes/coffes.controller';

@Module({
  imports: [],
  controllers: [CoffesController],
  providers: [CoffesService, PrismaService],
})
export class AppModule {}