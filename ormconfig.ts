import { ConnectionOptions } from 'typeorm';
import { PG } from './const'

const config: ConnectionOptions = {
    type: 'postgres',
    host: PG.POSTGRES_HOST,
    port: Number(PG.POSTGRES_PORT),
    username: PG.POSTGRES_USER,
    password: PG.POSTGRES_PASSWORD,
    database: PG.POSTGRES_DB,
    entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
    ],
    synchronize: true,
};

export default config;