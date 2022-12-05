import { DataSource } from 'typeorm';
import 'dotenv/config';

const AppDataSource = new DataSource(
  process.env.NODE_ENV === 'test'
    ? {
        type: 'postgres',
        host: process.env.DB_HOST,
        port: 5432,
        username: process.env.DB_USER,
        password: process.env.DB_PWD,
        database: process.env.DB_TEST,
        logging: true,
        synchronize: false,
        entities: ['src/entities/*.ts'],
        migrations: ['src/migrations/*.ts'],
        migrationsRun: true,
      }
    : {
        type: 'postgres',
        host: process.env.DB_HOST,
        port: 5432,
        username: process.env.DB_USER,
        password: process.env.DB_PWD,
        database: process.env.DB,
        logging: true,
        synchronize: false,
        entities: ['src/entities/*.ts'],
        migrations: ['src/migrations/*.ts'],
      }
);

export default AppDataSource;
