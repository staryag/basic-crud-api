import * as express from 'express';
import * as mongoose from 'mongoose';
import {empleadoRouter} from './routes/empleado-router';

const app = express();

//Route
app.get("/", (req, res) => {
  res.send("hello world");
});

// MongoDB connection
mongoose.connect("mongodb://localhost/test", { useNewUrlParser: true });
mongoose.connection
  .once("open", function () {
    console.log("Database connected Successfully");
  })
  .on("error", function (err) {
    console.log("Error", err);
  });

// Server
app.listen(8000, function () {
  console.log("Server is Up");
});

// Routes
app.use('/empleado',empleadoRouter);