import express from "express";
import "dotenv/config";
import routesCategory from "./routes/category.routes";
import routesProducts from "./routes/products.routes";
import { startDatabase } from "./database";

const app = express();

app.use(express.json());

app.use("/categories", routesCategory);
app.use("/products", routesProducts);

export default app.listen(3000, () => {
  console.log("Server running");

  startDatabase();
  console.log("database connected");
});
