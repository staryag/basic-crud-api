import {empleadoController} from '../controllers/empleado-controller';
import {Router} from 'express';

const empleadoRouter: Router = Router();

empleadoRouter.route("/create").post(empleadoController.nuevoEmpleado);

export {empleadoRouter};
