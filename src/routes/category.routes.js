import { Router } from "express";

const routesCategory = Router();

routesCategory.post("");
routesCategory.get("");
routesCategory.get(":id");
routesCategory.patch(":id");
routesCategory.delete(":id");

export default routesCategory;
