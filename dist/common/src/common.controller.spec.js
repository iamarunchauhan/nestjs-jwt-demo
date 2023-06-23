"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const common_controller_1 = require("./common.controller");
const common_service_1 = require("./common.service");
describe('CommonController', () => {
    let commonController;
    beforeEach(async () => {
        const app = await testing_1.Test.createTestingModule({
            controllers: [common_controller_1.CommonController],
            providers: [common_service_1.CommonService],
        }).compile();
        commonController = app.get(common_controller_1.CommonController);
    });
});
//# sourceMappingURL=common.controller.spec.js.map