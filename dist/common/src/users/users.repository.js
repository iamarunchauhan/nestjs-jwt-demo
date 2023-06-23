"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const user_entity_1 = require("./entities/user.entity");
let UsersRepository = class UsersRepository extends typeorm_1.Repository {
    async createUser(createUserDTO) {
        const { name, email, password, city } = createUserDTO;
        const user = new user_entity_1.Users();
        user.name = name;
        user.email = email;
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        console.log(hashedPassword);
        user.password = hashedPassword;
        user.city = city;
        try {
            await user.save();
            delete user.password;
            return user;
        }
        catch (error) {
            if (error.code === '23505') {
                throw new common_1.ConflictException('Email ID already exists!');
            }
            else {
                throw new common_1.InternalServerErrorException();
            }
        }
    }
    async register(createUserDto) {
        const { name, email, password, city } = createUserDto;
        const user = new user_entity_1.Users();
        user.name = name;
        user.email = email;
        user.city = city;
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        user.password = hashedPassword;
        try {
            await user.save();
            delete user.password;
            return user;
        }
        catch (error) {
            if (error.code === '23505') {
                throw new common_1.ConflictException('Email ID already exists!');
            }
            else {
                throw new common_1.InternalServerErrorException();
            }
        }
    }
};
UsersRepository = __decorate([
    (0, typeorm_1.EntityRepository)(user_entity_1.Users)
], UsersRepository);
exports.UsersRepository = UsersRepository;
//# sourceMappingURL=users.repository.js.map