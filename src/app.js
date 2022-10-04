import express from "express";
import "dotenv/config";
import routesCategory from "./routes/category.routes";
import routesProducts from "./routes/products.routes";

const app = express();

app.use(express.json());

app.use("/category", routesCategory);
app.use("/products", routesProducts);

export default app.listen(3333, () => {
  console.log("Server running");
});
