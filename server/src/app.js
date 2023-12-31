require("express-async-errors");
const express = require("express");
const config = require("./config/config");
const errorHandler = require("./middlewares/errorHandler");
const appRouter = require("./routes");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());

// Routes
app.use("/api/v1", appRouter);

// Global Error Hanlder Middleware
app.use(errorHandler);

const port = config.app.port;
const start = () => {
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
};
start();
