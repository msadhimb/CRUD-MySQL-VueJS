import express from "express";
import cors from "cors";

import TamuRoute from "./routes/TamuRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(TamuRoute);

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
