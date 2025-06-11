import { Body, Controller, Get, ParseIntPipe, Post, Param, Delete } from '@nestjs/common';
import { CoffesService } from './coffes.service';
import { CreateCafeDto } from './dto/create-cafe.dto';
import { Cafe } from '@prisma/client';

@Controller('coffes')
export class CoffesController {
    constructor(private cafes: CoffesService){}

    @Get()
    async showAllCoffes(){
        return this.cafes.showAllCoffes();
    }

    @Post()
    async create(@Body() data: CreateCafeDto): Promise<Cafe> {
    return this.cafes.createCafe(data);
    }
    
    @Get(':id/order')
    async getPedidosPorCafe(
    @Param('id', ParseIntPipe) id: number,
    ) {
    return this.cafes.getPedidosByCafeId(id);
    }

    @Delete(':id')
    async deleteCafe(@Param('id', ParseIntPipe) id: number) {
    return this.cafes.deleteCafe(id);
    }

}
