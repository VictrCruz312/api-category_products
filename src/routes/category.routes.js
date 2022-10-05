import { Router } from "express";
import createCategoryControler from "../controlers/categories/createCategory.controler";
import deleteCategoryControler from "../controlers/categories/deleteCategory.controler";
import getCategoriesControler from "../controlers/categories/getCategories.controler";
import getCategoryControler from "../controlers/categories/getCategory.controler";
import updateCategoryControler from "../controlers/categories/updateCategory.controler";

const routesCategory = Router();

routesCategory.post("", createCategoryControler);
routesCategory.get("", getCategoriesControler);
routesCategory.get("/:id", getCategoryControler);
routesCategory.patch("/:id", updateCategoryControler);
routesCategory.delete("/:id", deleteCategoryControler);

export default routesCategory;
