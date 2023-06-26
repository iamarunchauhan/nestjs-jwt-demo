import { DataSource } from 'typeorm';
import { Users } from './users/entities/user.entity';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: '',
        port: 5432,
        username: '',
        password: '',
        database: '',
        entities: [Users],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
