import { Module } from '@nestjs/common';
import { CoffesService } from './coffes.service';
import { CoffesController } from './coffes.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [CoffesController],
  providers: [CoffesService, PrismaService]

})
export class CoffesModule {}
