"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const auth_module_1 = require("./auth.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(auth_module_1.AuthModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Authnetication-Microservice')
        .setDescription('Authentication Microservice')
        .setVersion('1.0')
        .addTag('auth-module')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map