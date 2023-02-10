import express from "express";
// TODO: import router from users.route
import usersRouter from "./users.route"
const router = express.Router();

router.get("/test", (req, res) => {
  res.send("working");
});
router.use("/users",usersRouter);

// TODO: use the imported router to handle all routes matching "/users"

export default router;
