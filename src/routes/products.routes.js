import { Router } from "express";

const routesProducts = Router();

routesProducts.post("");
routesProducts.get("");
routesProducts.get(":id");
routesProducts.patch(":id");
routesProducts.delete(":id");
routesProducts.get("/category/:category_id");

export default routesProducts;
