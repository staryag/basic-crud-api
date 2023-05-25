export interface IConfigModel {
    app: {
        title: string,
        codigo: string,
        version: string,
        branch: string
    },
    urlApi?: string;
    urlFrontend?: string;
    node: {
        puerto: number,
        servidor: string
    },
    cliente: {
        servir: boolean;
        ruta?: string;
    };
    db: {
        url: string,
        opciones: any
    },
    responseTimeout: number;
}
