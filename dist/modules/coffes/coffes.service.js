"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let CoffesService = class CoffesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async showAllCoffes() {
        return this.prisma.cafe.findMany();
    }
    async createCafe(data) {
        return this.prisma.cafe.create({
            data,
        });
    }
    async getPedidosByCafeId(cafeId) {
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
    async deleteCafe(id) {
        const cafe = await this.prisma.cafe.findUnique({ where: { id } });
        if (!cafe) {
            throw new common_1.NotFoundException(`Café com ID ${id} não encontrado`);
        }
        return this.prisma.cafe.delete({
            where: { id },
        });
    }
};
exports.CoffesService = CoffesService;
exports.CoffesService = CoffesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CoffesService);
//# sourceMappingURL=coffes.service.js.map