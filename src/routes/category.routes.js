import { Router } from "express";
import createCategoryControler from "../controlers/categories/createCategory.controler";
import getCategoriesControler from "../controlers/categories/getCategories.controler";

const routesCategory = Router();

routesCategory.post("", createCategoryControler);
routesCategory.get("", getCategoriesControler);
routesCategory.get(":id");
routesCategory.patch(":id");
routesCategory.delete(":id");

export default routesCategory;
