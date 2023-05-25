import * as dotenv from 'dotenv';
import {IConfigModel} from '../../interfaces/config-model';

dotenv.config();
let path;
if (process.env.NODE_ENV) {
    if (process.env.NODE_ENV_PATH) {
        path = process.env.NODE_ENV_PATH + '/' + process.env.NODE_ENV + '.env';
    } else {
        if (!process.env.PWD) {
            process.env.PWD = process.cwd();
        }
        path = process.env.PWD + '/config/' + process.env.NODE_ENV + '.env';
        console.log('process', process);
        console.log('process.env.NODE_ENV', process.env.NODE_ENV);
        console.log('process.env.NODE_ENV length', process.env.NODE_ENV.toString().length);
    }
} else {
    if (process.env.NODE_ENV_PATH) {
        path = process.env.NODE_ENV_PATH + '/local.env';
    } else {
        path = process.env.PWD + '/config/local.env';
    }
}
dotenv.config({path: path});

console.log('');
console.log('Cargando configuracion de entorno ' + process.env.NODE_ENV);
console.log('Process Env: ' + JSON.stringify(process.env, null, 4));
console.log('Ruta fichero configuracion entorno: ' + path);
console.log('');

const ConfigEnv: IConfigModel = {
    app: {
        title: 'Simple CRUD API',
        codigo: 'APP001',
        version: <string>process.env.npm_package_version,
        branch: 'main'
    },
    cliente: {
        servir: false,
        // ruta: './../../../../node_modules/@zabalit/app-ema-ehealth-web/dist'
    },
    urlFrontend: <string>process.env.FRONTEND_URL,
    urlApi: <string>process.env.API_URL,
    node: {
        puerto: Number(process.env.NODE_PORT),
        servidor: <string>process.env.NODE_HOST
    },
    db: {
        url: <string>process.env.MONGO_URL,
        opciones: {
            native_parser: false,
            poolSize: 5,
            keepAlive: true,
            connectTimeoutMS: 60000,
            reconnectInterval: 5000,
            reconnectTries: 3600,
            autoReconnect: true,
            debug: false
        }
    },
    responseTimeout: 31000, // en milisegundos
};

export {ConfigEnv};
