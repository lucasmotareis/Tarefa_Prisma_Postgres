import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCafeDto } from './dto/create-cafe.dto';
import { Cafe } from '@prisma/client';
export declare class CoffesService {
    private prisma;
    constructor(prisma: PrismaService);
    showAllCoffes(): Promise<{
        nome: string;
        tipo: string;
        precoUnitario: number;
        descricao: string;
        tags: string[];
        id: number;
    }[]>;
    createCafe(data: CreateCafeDto): Promise<Cafe>;
    getPedidosByCafeId(cafeId: number): Promise<{
        pedido: {
            cliente: {
                nome: string;
                id: number;
                email: string;
                cpf: string;
                telefone: string;
            };
            id: number;
            dataPedido: Date;
            totalPedido: number;
        };
        quantidade: number;
    }[]>;
    deleteCafe(id: number): Promise<{
        nome: string;
        tipo: string;
        precoUnitario: number;
        descricao: string;
        tags: string[];
        id: number;
    }>;
}
