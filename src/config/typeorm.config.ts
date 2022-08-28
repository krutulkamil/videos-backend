import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { DATABASE, HOST, PASSWORD, PORT, USERNAME } from "./environment.config";

export const getTypeOrmConfig = (): TypeOrmModuleOptions => ({
    type: 'postgres',
    host: HOST,
    port: +PORT,
    database: DATABASE,
    username: USERNAME,
    password: PASSWORD,
    autoLoadEntities: true,
    synchronize: true
});