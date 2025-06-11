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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffesController = void 0;
const common_1 = require("@nestjs/common");
const coffes_service_1 = require("./coffes.service");
const create_cafe_dto_1 = require("./dto/create-cafe.dto");
let CoffesController = class CoffesController {
    cafes;
    constructor(cafes) {
        this.cafes = cafes;
    }
    async showAllCoffes() {
        return this.cafes.showAllCoffes();
    }
    async create(data) {
        return this.cafes.createCafe(data);
    }
    async getPedidosPorCafe(id) {
        return this.cafes.getPedidosByCafeId(id);
    }
    async deleteCafe(id) {
        return this.cafes.deleteCafe(id);
    }
};
exports.CoffesController = CoffesController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CoffesController.prototype, "showAllCoffes", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cafe_dto_1.CreateCafeDto]),
    __metadata("design:returntype", Promise)
], CoffesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id/order'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CoffesController.prototype, "getPedidosPorCafe", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CoffesController.prototype, "deleteCafe", null);
exports.CoffesController = CoffesController = __decorate([
    (0, common_1.Controller)('coffes'),
    __metadata("design:paramtypes", [coffes_service_1.CoffesService])
], CoffesController);
//# sourceMappingURL=coffes.controller.js.map