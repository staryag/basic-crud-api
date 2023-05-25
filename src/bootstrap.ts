import {Container} from 'inversify';
import {Application, NextFunction, Response, Request, static as serveStatic} from 'express';
import {DbConnection} from './db/utils/connection.db';
import {ConfigEnv} from './config/env/server';
import session = require('express-session');
import * as mongoose from 'mongoose';

const MongoStore = require('connect-mongo')(session);

const run = async function () {
    const container = new Container();

    await DbConnection.initConnection(ConfigEnv.db!.url as string);
    DbConnection.setAutoReconnect();
}

try {
    run();
} catch (err) {
    console.log(err);
}