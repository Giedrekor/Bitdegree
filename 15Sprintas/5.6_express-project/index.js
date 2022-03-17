import express from "express";
import {router} from "./router/routes.js"

const app = express();
const PORT = 3000;

app.use(router);

app.listen(PORT, () => {
  console.log(`This is on PORT ${PORT}`);
});
