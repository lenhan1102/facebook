import * as path from 'path';
import * as entities from './entity';

const basename = path.basename(__dirname);

const ormconfig = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'facebook',
    entities: Object.values(entities),
    synchronize: false,
    migrations: [basename + '/migrations/*{.ts,.js}'],
    cli: {
        migrationsDir: basename + '/migrations',
    },
}

export = ormconfig;