"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const coffes_module_1 = require("./modules/coffes/coffes.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(coffes_module_1.CoffesModule);
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map