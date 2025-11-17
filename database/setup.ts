import 'reflect-metadata';
import { DataSource } from 'typeorm';

const setupDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'aplicacion',
  synchronize: true,
  logging: true,
  entities: [__dirname + '/../src/**/*.entity.{ts,js}'],

});

setupDataSource
  .initialize()
  .then(async () => {
    console.log('✅ Base de datos sincronizada correctamente');
    await setupDataSource.destroy();
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Error al sincronizar la base de datos:', error);
    process.exit(1);
  });
