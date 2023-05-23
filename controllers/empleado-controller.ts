import {Empleado} from "../models/empleado-model";

export class EmpleadoController {
  nuevoEmpleado(req, res, next) {
    let empName = req.body.empName;
    let empEmail = req.body.empEmail;
    let empMobile = req.body.empMobile;
    let emp = new Empleado({
      empName,
      empEmail,
      empMobile,
    });
    emp.save().then((data) => {
      res.send(data);
    });
  }
}

export const empleadoController = new EmpleadoController();
