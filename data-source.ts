import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "aplicacion",
  synchronize: true,  // True solo en desarrollo
  logging: true,
  entities: ['dist/**/*.entity.js'],    // En desarrollo, TS sin compilar
  migrations: ['src/migrations/*.ts'],
});

export default AppDataSource;
