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
exports.CommonService = void 0;
const common_1 = require("@nestjs/common");
let CommonService = class CommonService {
    constructor(commonClient) {
        this.commonClient = commonClient;
    }
    onModuleInit() {
        console.log('init');
        this.commonGrpcService =
            this.commonClient.getService('CommonService');
    }
    async find() {
        const res = await this.commonGrpcService.find({ user: 'test' }).toPromise();
        return res;
    }
    async register(createUserDto) {
        const res = await this.commonGrpcService.register(createUserDto).toPromise();
        return res;
    }
    async login(loginUserDto) {
        console.log("Inside Common Service");
        const res = await this.commonGrpcService.login(loginUserDto).toPromise();
        return res;
    }
};
CommonService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('common')),
    __metadata("design:paramtypes", [Object])
], CommonService);
exports.CommonService = CommonService;
//# sourceMappingURL=common.service.js.map