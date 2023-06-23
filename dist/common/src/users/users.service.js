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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const bcrypt = require("bcrypt");
const users_repository_1 = require("./users.repository");
const jwt_1 = require("@nestjs/jwt");
let UsersService = class UsersService {
    constructor(accountsRepository, usersRepository, jwtService) {
        this.accountsRepository = accountsRepository;
        this.usersRepository = usersRepository;
        this.jwtService = jwtService;
    }
    async findAll() {
        try {
            const res = await this.accountsRepository.find();
            console.log(res);
            return { accounts: res };
        }
        catch (e) {
            console.log(e);
        }
    }
    async register(createUserDTO) {
        try {
            return await this.usersRepository.register(createUserDTO);
        }
        catch (e) {
            console.log(e);
        }
    }
    async loginUser(loginUserDto) {
        const { email, password } = loginUserDto;
        console.log(loginUserDto);
        const user = await this.usersRepository.findOne({ where: { email: email } });
        console.log(user);
        if (!user) {
            throw new common_1.NotFoundException('User details not found');
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        console.log(isPasswordValid);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        const payload = { email };
        const accessToken = await this.jwtService.sign(payload);
        return { accessToken };
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('ACCOUNT_REPOSITORY')),
    __param(1, (0, common_1.Inject)(users_repository_1.UsersRepository)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        users_repository_1.UsersRepository,
        jwt_1.JwtService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map