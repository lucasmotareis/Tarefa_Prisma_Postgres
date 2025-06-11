import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCafeDto } from './dto/create-cafe.dto';
import { Cafe } from '@prisma/client';

@Injectable()
export class CoffesService {
  constructor(private prisma: PrismaService) {}

  async showAllCoffes() {
    return this.prisma.cafe.findMany();
  }

  async createCafe(data: CreateCafeDto): Promise<Cafe> {
    return this.prisma.cafe.create({
      data,
    });
  }

  async getPedidosByCafeId(cafeId: number) {
    return this.prisma.itemPedido.findMany({
      where: { cafeId },
      select: {
        quantidade: true,
        pedido: {
          select: {
            id: true,
            dataPedido: true,
            totalPedido: true,
            cliente: {
              select: {
                id: true,
                nome: true,
                email: true,
                cpf: true,
                telefone: true,
              },
            },
          },
        },
      },
    });
  }
  

  async deleteCafe(id: number) {
    const cafe = await this.prisma.cafe.findUnique({ where: { id } });
    if (!cafe) {
      throw new NotFoundException(`Café com ID ${id} não encontrado`);
    }
  
    return this.prisma.cafe.delete({
      where: { id },
    });
  }

}
