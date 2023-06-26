/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/common/src/common.controller.ts":
/*!**********************************************!*\
  !*** ./apps/common/src/common.controller.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommonController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const common_service_1 = __webpack_require__(/*! ./common.service */ "./apps/common/src/common.service.ts");
let CommonController = class CommonController {
    constructor(commonService) {
        this.commonService = commonService;
    }
};
CommonController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof common_service_1.CommonService !== "undefined" && common_service_1.CommonService) === "function" ? _a : Object])
], CommonController);
exports.CommonController = CommonController;


/***/ }),

/***/ "./apps/common/src/common.module.ts":
/*!******************************************!*\
  !*** ./apps/common/src/common.module.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommonModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const common_controller_1 = __webpack_require__(/*! ./common.controller */ "./apps/common/src/common.controller.ts");
const common_service_1 = __webpack_require__(/*! ./common.service */ "./apps/common/src/common.service.ts");
const users_module_1 = __webpack_require__(/*! ./users/users.module */ "./apps/common/src/users/users.module.ts");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
let CommonModule = class CommonModule {
};
CommonModule = __decorate([
    (0, common_1.Module)({
        imports: [
            users_module_1.UsersModule,
            config_1.ConfigModule.forRoot({
                envFilePath: [`.env.stage.dev`],
            }),
        ],
        controllers: [common_controller_1.CommonController],
        providers: [common_service_1.CommonService],
    })
], CommonModule);
exports.CommonModule = CommonModule;


/***/ }),

/***/ "./apps/common/src/common.service.ts":
/*!*******************************************!*\
  !*** ./apps/common/src/common.service.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommonService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let CommonService = class CommonService {
};
CommonService = __decorate([
    (0, common_1.Injectable)()
], CommonService);
exports.CommonService = CommonService;


/***/ }),

/***/ "./apps/common/src/database.module.ts":
/*!********************************************!*\
  !*** ./apps/common/src/database.module.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const database_providers_1 = __webpack_require__(/*! ./database.providers */ "./apps/common/src/database.providers.ts");
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    (0, common_1.Module)({
        providers: [...database_providers_1.databaseProviders],
        exports: [...database_providers_1.databaseProviders],
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;


/***/ }),

/***/ "./apps/common/src/database.providers.ts":
/*!***********************************************!*\
  !*** ./apps/common/src/database.providers.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.databaseProviders = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! ./users/entities/user.entity */ "./apps/common/src/users/entities/user.entity.ts");
exports.databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new typeorm_1.DataSource({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'admin',
                database: 'nestjsexperiment',
                entities: [user_entity_1.Users],
                synchronize: true,
            });
            return dataSource.initialize();
        },
    },
];


/***/ }),

/***/ "./apps/common/src/users/dto/accounts.dto.ts":
/*!***************************************************!*\
  !*** ./apps/common/src/users/dto/accounts.dto.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserDetailsResponseDto = exports.UserDetailsDto = exports.UserDto = void 0;
class UserDto {
}
exports.UserDto = UserDto;
class UserDetailsDto {
}
exports.UserDetailsDto = UserDetailsDto;
class UserDetailsResponseDto {
}
exports.UserDetailsResponseDto = UserDetailsResponseDto;


/***/ }),

/***/ "./apps/common/src/users/dto/create-user.dto.ts":
/*!******************************************************!*\
  !*** ./apps/common/src/users/dto/create-user.dto.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterResponseDto = exports.CreateUserDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateUserDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(8),
    (0, class_validator_1.Matches)(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "city", void 0);
exports.CreateUserDto = CreateUserDto;
class RegisterResponseDto {
}
exports.RegisterResponseDto = RegisterResponseDto;


/***/ }),

/***/ "./apps/common/src/users/dto/forget-password.dto.ts":
/*!**********************************************************!*\
  !*** ./apps/common/src/users/dto/forget-password.dto.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ForgetPasswordResponseDto = exports.ForgetPasswordDTO = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class ForgetPasswordDTO {
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ForgetPasswordDTO.prototype, "email", void 0);
exports.ForgetPasswordDTO = ForgetPasswordDTO;
class ForgetPasswordResponseDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ForgetPasswordResponseDto.prototype, "forgetPasswordToken", void 0);
exports.ForgetPasswordResponseDto = ForgetPasswordResponseDto;


/***/ }),

/***/ "./apps/common/src/users/dto/login-user.dto.ts":
/*!*****************************************************!*\
  !*** ./apps/common/src/users/dto/login-user.dto.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginResponseDTO = exports.LoginUserDTO = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class LoginUserDTO {
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoginUserDTO.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoginUserDTO.prototype, "password", void 0);
exports.LoginUserDTO = LoginUserDTO;
class LoginResponseDTO {
}
exports.LoginResponseDTO = LoginResponseDTO;


/***/ }),

/***/ "./apps/common/src/users/dto/reset-password.dto.ts":
/*!*********************************************************!*\
  !*** ./apps/common/src/users/dto/reset-password.dto.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResetPasswordResponseDTO = exports.ResetPasswordRequestDTO = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class ResetPasswordRequestDTO {
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResetPasswordRequestDTO.prototype, "token", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResetPasswordRequestDTO.prototype, "newPassword", void 0);
exports.ResetPasswordRequestDTO = ResetPasswordRequestDTO;
class ResetPasswordResponseDTO {
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResetPasswordResponseDTO.prototype, "passwordChanged", void 0);
exports.ResetPasswordResponseDTO = ResetPasswordResponseDTO;


/***/ }),

/***/ "./apps/common/src/users/entities/user.entity.ts":
/*!*******************************************************!*\
  !*** ./apps/common/src/users/entities/user.entity.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Users = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let Users = class Users extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Users.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Users.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Users.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Users.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Users.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Users.prototype, "forgetpasswordtoken", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Users.prototype, "tokencreateddate", void 0);
Users = __decorate([
    (0, typeorm_1.Entity)()
], Users);
exports.Users = Users;


/***/ }),

/***/ "./apps/common/src/users/jwt.strategy.ts":
/*!***********************************************!*\
  !*** ./apps/common/src/users/jwt.strategy.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const passport_jwt_1 = __webpack_require__(/*! passport-jwt */ "passport-jwt");
const users_repository_1 = __webpack_require__(/*! ./users.repository */ "./apps/common/src/users/users.repository.ts");
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor(usersRepository, configService) {
        super({
            secretOrKey: configService.get('JWT_SECRET'),
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken()
        });
        this.usersRepository = usersRepository;
        this.configService = configService;
    }
    async validate(payload) {
        const { email } = payload;
        const user = await this.usersRepository.findOne({ where: { email: email } });
        if (!user) {
            throw new common_1.UnauthorizedException('');
        }
        return user;
    }
};
JwtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_repository_1.UsersRepository)),
    __metadata("design:paramtypes", [typeof (_a = typeof users_repository_1.UsersRepository !== "undefined" && users_repository_1.UsersRepository) === "function" ? _a : Object, typeof (_b = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _b : Object])
], JwtStrategy);
exports.JwtStrategy = JwtStrategy;


/***/ }),

/***/ "./apps/common/src/users/mail.module.ts":
/*!**********************************************!*\
  !*** ./apps/common/src/users/mail.module.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MailModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mail_service_1 = __webpack_require__(/*! ./mail.service */ "./apps/common/src/users/mail.service.ts");
let MailModule = class MailModule {
};
MailModule = __decorate([
    (0, common_1.Module)({
        providers: [mail_service_1.MailService],
        exports: [mail_service_1.MailService],
    })
], MailModule);
exports.MailModule = MailModule;


/***/ }),

/***/ "./apps/common/src/users/mail.service.ts":
/*!***********************************************!*\
  !*** ./apps/common/src/users/mail.service.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MailService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const nodemailer = __webpack_require__(/*! nodemailer */ "nodemailer");
let MailService = class MailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'anuragrana012@gmail.com',
                pass: 'sxryaqrvuxmuztkm',
            },
        });
    }
    async sendEmail(to, subject, text) {
        try {
            const info = await this.transporter.sendMail({
                from: 'anuragrana012@gmail.com',
                to,
                subject,
                text,
            });
            console.log('Email sent:', info.messageId);
        }
        catch (error) {
            console.error('Error sending email:', error);
            throw new Error('Failed to send email.');
        }
    }
};
MailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], MailService);
exports.MailService = MailService;


/***/ }),

/***/ "./apps/common/src/users/users.controller.ts":
/*!***************************************************!*\
  !*** ./apps/common/src/users/users.controller.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var UsersController_1;
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const users_service_1 = __webpack_require__(/*! ./users.service */ "./apps/common/src/users/users.service.ts");
const create_user_dto_1 = __webpack_require__(/*! ./dto/create-user.dto */ "./apps/common/src/users/dto/create-user.dto.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const accounts_dto_1 = __webpack_require__(/*! ./dto/accounts.dto */ "./apps/common/src/users/dto/accounts.dto.ts");
const login_user_dto_1 = __webpack_require__(/*! ./dto/login-user.dto */ "./apps/common/src/users/dto/login-user.dto.ts");
const forget_password_dto_1 = __webpack_require__(/*! ./dto/forget-password.dto */ "./apps/common/src/users/dto/forget-password.dto.ts");
const reset_password_dto_1 = __webpack_require__(/*! ./dto/reset-password.dto */ "./apps/common/src/users/dto/reset-password.dto.ts");
let UsersController = UsersController_1 = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
        this.logger = new common_1.Logger(UsersController_1.name);
    }
    findAll(userRes) {
        this.logger.log('Inside gRPC Method - find');
        const res = this.usersService.findAll();
        return res;
    }
    register(createUserDto) {
        this.logger.log('Inside gRPC Method - register');
        const res = this.usersService.registerUser(createUserDto);
        return res;
    }
    login(loginUserDto) {
        this.logger.log('Inside gRPC Method - login');
        return this.usersService.loginUser(loginUserDto);
    }
    forgetpassword(forgetPasswordDTO) {
        this.logger.log('Inside gRPC Method - forgetpassword');
        return this.usersService.forgetpassword(forgetPasswordDTO);
    }
    resetpassword(resetPasswordRequestDTO) {
        this.logger.log('Inside gRPC Method - resetpassword');
        return this.usersService.resetpassword(resetPasswordRequestDTO);
    }
};
__decorate([
    (0, microservices_1.GrpcMethod)('CommonService', 'find'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof accounts_dto_1.UserDto !== "undefined" && accounts_dto_1.UserDto) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.GrpcMethod)('CommonService', 'register'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof create_user_dto_1.CreateUserDto !== "undefined" && create_user_dto_1.CreateUserDto) === "function" ? _d : Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], UsersController.prototype, "register", null);
__decorate([
    (0, microservices_1.GrpcMethod)('CommonService', 'login'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof login_user_dto_1.LoginUserDTO !== "undefined" && login_user_dto_1.LoginUserDTO) === "function" ? _f : Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], UsersController.prototype, "login", null);
__decorate([
    (0, microservices_1.GrpcMethod)('CommonService', 'forgetpassword'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof forget_password_dto_1.ForgetPasswordDTO !== "undefined" && forget_password_dto_1.ForgetPasswordDTO) === "function" ? _h : Object]),
    __metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], UsersController.prototype, "forgetpassword", null);
__decorate([
    (0, microservices_1.GrpcMethod)('CommonService', 'resetpassword'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_k = typeof reset_password_dto_1.ResetPasswordRequestDTO !== "undefined" && reset_password_dto_1.ResetPasswordRequestDTO) === "function" ? _k : Object]),
    __metadata("design:returntype", typeof (_l = typeof Promise !== "undefined" && Promise) === "function" ? _l : Object)
], UsersController.prototype, "resetpassword", null);
UsersController = UsersController_1 = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object])
], UsersController);
exports.UsersController = UsersController;


/***/ }),

/***/ "./apps/common/src/users/users.module.ts":
/*!***********************************************!*\
  !*** ./apps/common/src/users/users.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const users_service_1 = __webpack_require__(/*! ./users.service */ "./apps/common/src/users/users.service.ts");
const users_controller_1 = __webpack_require__(/*! ./users.controller */ "./apps/common/src/users/users.controller.ts");
const database_module_1 = __webpack_require__(/*! ../database.module */ "./apps/common/src/database.module.ts");
const users_repository_1 = __webpack_require__(/*! ./users.repository */ "./apps/common/src/users/users.repository.ts");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const jwt_strategy_1 = __webpack_require__(/*! ./jwt.strategy */ "./apps/common/src/users/jwt.strategy.ts");
const users_provider_1 = __webpack_require__(/*! ./users.provider */ "./apps/common/src/users/users.provider.ts");
const mail_module_1 = __webpack_require__(/*! ./mail.module */ "./apps/common/src/users/mail.module.ts");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule,
            mail_module_1.MailModule,
            config_1.ConfigModule,
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => ({
                    secret: configService.get('JWT_SECRET'),
                    signOptions: {
                        expiresIn: 3600,
                    }
                }),
            }),
        ],
        controllers: [users_controller_1.UsersController],
        providers: [...users_provider_1.usersProviders, config_1.ConfigService, users_service_1.UsersService, jwt_strategy_1.JwtStrategy, users_repository_1.UsersRepository],
        exports: [jwt_strategy_1.JwtStrategy, passport_1.PassportModule]
    })
], UsersModule);
exports.UsersModule = UsersModule;


/***/ }),

/***/ "./apps/common/src/users/users.provider.ts":
/*!*************************************************!*\
  !*** ./apps/common/src/users/users.provider.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.usersProviders = void 0;
const user_entity_1 = __webpack_require__(/*! ./entities/user.entity */ "./apps/common/src/users/entities/user.entity.ts");
exports.usersProviders = [
    {
        provide: 'USERS_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(user_entity_1.Users),
        inject: ['DATA_SOURCE'],
    },
];


/***/ }),

/***/ "./apps/common/src/users/users.repository.ts":
/*!***************************************************!*\
  !*** ./apps/common/src/users/users.repository.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersRepository = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const bcrypt = __webpack_require__(/*! bcrypt */ "bcrypt");
const user_entity_1 = __webpack_require__(/*! ./entities/user.entity */ "./apps/common/src/users/entities/user.entity.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
let UsersRepository = class UsersRepository extends typeorm_1.Repository {
    async registerUser(createUserDto) {
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
            return { success: true };
        }
        catch (error) {
            if (error.code === '23505') {
                throw new microservices_1.RpcException('Email ID already exists!');
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


/***/ }),

/***/ "./apps/common/src/users/users.service.ts":
/*!************************************************!*\
  !*** ./apps/common/src/users/users.service.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const bcrypt = __webpack_require__(/*! bcrypt */ "bcrypt");
const users_repository_1 = __webpack_require__(/*! ./users.repository */ "./apps/common/src/users/users.repository.ts");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const mail_service_1 = __webpack_require__(/*! ./mail.service */ "./apps/common/src/users/mail.service.ts");
let UsersService = class UsersService {
    constructor(usersRepository, jwtService, mailService) {
        this.usersRepository = usersRepository;
        this.jwtService = jwtService;
        this.mailService = mailService;
    }
    async findAll() {
        try {
            const res = await this.usersRepository.find();
            console.log(res);
            return { users: res };
        }
        catch (e) {
            console.log(e);
        }
    }
    async registerUser(createUserDTO) {
        try {
            return await this.usersRepository.registerUser(createUserDTO);
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
        const loginResponseDTO = { accessToken: accessToken };
        return loginResponseDTO;
    }
    async forgetpassword(forgetPasswordDTO) {
        const { email } = forgetPasswordDTO;
        console.log(forgetPasswordDTO);
        const user = await this.usersRepository.findOne({ where: { email: email } });
        console.log(user);
        if (!user) {
            throw new common_1.NotFoundException('User details not found');
        }
        const payload = { email };
        const forgetPasswordToken = await this.jwtService.sign(payload);
        console.log(forgetPasswordToken);
        console.log(new Date());
        var today = new Date();
        today.setHours(today.getHours() + 1);
        await this.usersRepository.update({ id: user.id }, {
            forgetpasswordtoken: forgetPasswordToken,
            tokencreateddate: today
        });
        const forgetPasswordTokenString = `Please find your forget password token : ${forgetPasswordToken}`;
        await this.mailService.sendEmail(email, 'Forget Password Token', forgetPasswordTokenString);
        const forgetPasswordResponseDTO = { forgetPasswordToken: forgetPasswordToken };
        return forgetPasswordResponseDTO;
    }
    async resetpassword(resetPasswordRequestDTO) {
        console.log("Reset password user service");
        const { token, newPassword } = resetPasswordRequestDTO;
        console.log(token);
        console.log(newPassword);
        const user = await this.usersRepository.findOne({ where: { forgetpasswordtoken: token } });
        console.log(user);
        if (!user) {
            throw new common_1.NotFoundException('User details not found');
        }
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(newPassword, salt);
        this.usersRepository.update({ id: user.id }, {
            password: hashedPassword,
            forgetpasswordtoken: ""
        });
        const resetPasswordResponseDTO = { passwordChanged: "Password changed successfully " };
        return resetPasswordResponseDTO;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(users_repository_1.UsersRepository)),
    __metadata("design:paramtypes", [typeof (_a = typeof users_repository_1.UsersRepository !== "undefined" && users_repository_1.UsersRepository) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object, typeof (_c = typeof mail_service_1.MailService !== "undefined" && mail_service_1.MailService) === "function" ? _c : Object])
], UsersService);
exports.UsersService = UsersService;


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/microservices":
/*!****************************************!*\
  !*** external "@nestjs/microservices" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ }),

/***/ "@nestjs/passport":
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@nestjs/typeorm":
/*!**********************************!*\
  !*** external "@nestjs/typeorm" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*********************************!*\
  !*** ./apps/common/src/main.ts ***!
  \*********************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const common_module_1 = __webpack_require__(/*! ./common.module */ "./apps/common/src/common.module.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const path_1 = __webpack_require__(/*! path */ "path");
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

})();

/******/ })()
;