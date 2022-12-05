import { DataSource } from 'typeorm';
import 'dotenv/config';
// const db = newDb();
// db.public.registerFunction({
//   name: 'current_database',
//   args: [],
//   returns: DataType.text,
//   implementation: () => 'test',
// });

// db.public.registerFunction({
//   name: 'version',
//   args: [],
//   returns: DataType.text,
//   implementation: () => 'test',
// });

// const AppDataSource = new DataSource(
//   process.env.NODE_ENV === 'test'
//     ? {
//         type: 'sqlite',
//         database: ':memory:',
//         synchronize: true,
//         entities: ['src/entities/*.ts'],
//       }
//     : {
//         type: 'postgres',
//         host: process.env.DB_HOST,
//         port: 5432,
//         username: process.env.DB_USER,
//         password: process.env.DB_PWD,
//         database: process.env.DB,
//         logging: true,
//         synchronize: false,
//         entities: ['src/entities/*.ts'],
//         migrations: ['src/migrations/*.ts'],
//       }
// );

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

// const testDataSource = db.adapters.createTypeormDataSource({
//   type: 'postgres',
//   entities: ['src/entities/*.ts'],
//   migrations: ['src/migrations/*.ts'],
//   // synchronize: true,
// });

// export { testDataSource };

export default AppDataSource;
