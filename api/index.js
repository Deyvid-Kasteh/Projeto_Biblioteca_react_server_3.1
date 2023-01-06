import express from "express";
import { Router } from "express";

const app = express();

const route = Router();

route.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Hello World! Sucesso! Deyvid é o cara",
  });
});

app.use(route);

app.listen(4001, () => {
  console.log("listening on port 4001");
});
