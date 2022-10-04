import { Router } from "express";
import createCategoryControler from "../controlers/categories/createCategory.controler";
import getCategoriesControler from "../controlers/categories/getCategories.controler";
import getCategoryControler from "../controlers/categories/getCategory.controler";

const routesCategory = Router();

routesCategory.post("", createCategoryControler);
routesCategory.get("", getCategoriesControler);
routesCategory.get("/:id", getCategoryControler);
routesCategory.patch(":id");
routesCategory.delete(":id");

export default routesCategory;
