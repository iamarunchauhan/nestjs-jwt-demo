import { BaseEntity } from 'typeorm';
export declare class Users extends BaseEntity {
    id: number;
    name: string;
    email: string;
    password: string;
    city: string;
}
