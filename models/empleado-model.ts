import * as mongoose from 'mongoose';

const EmpleadoSchema = new mongoose.Schema({
  empName: {
    type: String,
    required: true,
  },
  empEmail: {
    type: String,
    required: true,
  },
  empMobile: {
    type: String,
    required: true,
  },
});

export let Empleado = mongoose.model('empleado', EmpleadoSchema);
