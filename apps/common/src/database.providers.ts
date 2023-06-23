import { DataSource } from 'typeorm';
import { Accounts } from './users/entities/account.entity';
import { Users } from './users/entities/user.entity';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: '',
        password: '',
        database: '',
        entities: [Accounts, Users],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
