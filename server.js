import express from "express";
// import apiRouter from "./routes";
import config from "./config";
import router from "./routes"

const app = express();

app.use(express.json());
app.use("/api", router);

/**
 * Error handler middleware
 */
app.use((err, req, res, next) => {
  console.error(err);
  res.json({name: err.name, msg: err.message});
});

/**
 * Bind the app to a specified port
 * You can access your app at http://localhost:<port>
 */
app.listen(config.port, () =>{
  console.log(`Server listening on port ${config.port}...`)
});
