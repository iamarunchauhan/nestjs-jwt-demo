import { DataSource } from 'typeorm';
import { Accounts } from './entities/account.entity';
export declare const accountProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Accounts>;
    inject: string[];
}[];
