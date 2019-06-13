import express from "express";
import SERVER from "./schema"
const PORT = 3000;

const app = express();

SERVER.applyMiddleware({app})

app.listen(PORT, () => {
  console.log(` server start port ${PORT}`);
});
export default app;
