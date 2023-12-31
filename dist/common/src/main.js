"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_module_1 = require("./common.module");
const microservices_1 = require("@nestjs/microservices");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(common_module_1.CommonModule, {
        transport: microservices_1.Transport.GRPC,
        options: {
            package: 'common',
            protoPath: (0, path_1.join)(__dirname, 'proto/common.proto'),
            url: '0.0.0.0:3001',
        },
    });
    await app.listen();
}
bootstrap();
//# sourceMappingURL=main.js.map