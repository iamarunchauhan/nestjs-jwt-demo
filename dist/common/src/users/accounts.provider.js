"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountProviders = void 0;
const account_entity_1 = require("./entities/account.entity");
exports.accountProviders = [
    {
        provide: 'ACCOUNT_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(account_entity_1.Accounts),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=accounts.provider.js.map