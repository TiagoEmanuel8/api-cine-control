import { DataSource } from 'typeorm';
import { dataSourceOptions } from './database.module';
import { CreateUsersTable1700931682799 } from '../migrations/1700931682799-CreateUsersTable';
import { CreateFilmsTable1701088882965 } from 'src/migrations/1701088882965-CreateFilmsTable';

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,

  migrations: [CreateUsersTable1700931682799, CreateFilmsTable1701088882965],
});
