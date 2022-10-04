import { Router } from "express";
import createCategoryControler from "../controlers/createCategory.controler";

const routesCategory = Router();

routesCategory.post("", createCategoryControler);
routesCategory.get("");
routesCategory.get(":id");
routesCategory.patch(":id");
routesCategory.delete(":id");

export default routesCategory;
