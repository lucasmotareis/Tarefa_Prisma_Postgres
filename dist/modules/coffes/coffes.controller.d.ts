import { CoffesService } from './coffes.service';
import { CreateCafeDto } from './dto/create-cafe.dto';
import { Cafe } from '@prisma/client';
export declare class CoffesController {
    private cafes;
    constructor(cafes: CoffesService);
    showAllCoffes(): Promise<{
        nome: string;
        tipo: string;
        precoUnitario: number;
        descricao: string;
        tags: string[];
        id: number;
    }[]>;
    create(data: CreateCafeDto): Promise<Cafe>;
    getPedidosPorCafe(id: number): Promise<{
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
