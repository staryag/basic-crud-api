import * as mongoose from 'mongoose';

export class DbConnection {

    private static DB_CONN_STR: string;

    public static async initConnection(str: string) {
        this.DB_CONN_STR = str;
        await DbConnection.connect(this.DB_CONN_STR);
    }

    public static async connect(connStr: string) {
        return mongoose.connect(
            connStr,
            {useNewUrlParser: true, useFindAndModify: false}
        )
            .then(() => {
                console.log(`Successfully connected to ${connStr}`);
            })
            .catch((error) => {
                console.error('Error connecting to database: ', error);
                return process.exit(1);
            });
    }

    public static setAutoReconnect() {
        mongoose.connection.on('disconnected', () => DbConnection.connect(this.DB_CONN_STR));
    }

    public static async disconnect() {
        await mongoose.connection.close();
    }
}
