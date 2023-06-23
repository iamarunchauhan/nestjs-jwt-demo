import { IsString } from 'class-validator';
import { PrimaryGeneratedColumn, BaseEntity, Column, Entity } from 'typeorm';

@Entity()
export class Users extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column()
    city: string;
}
