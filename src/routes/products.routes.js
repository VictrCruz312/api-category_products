import { Router } from "express";
import createProductControler from "../controlers/products/createProduct.controler";
import deleteProductControler from "../controlers/products/deleteProduct.controler";
import getProductControler from "../controlers/products/getProduct.controler";
import getProductPerCategoryControler from "../controlers/products/getProductPerCategory.controler";
import getProductsControler from "../controlers/products/getProducts.controler";
import updateProductControler from "../controlers/products/updateProduct.controler";

const routesProducts = Router();

routesProducts.post("", createProductControler);
routesProducts.get("", getProductsControler);
routesProducts.get("/:id", getProductControler);
// routesProducts.patch("/:id", updateProductControler);
// routesProducts.delete("/:id", deleteProductControler);
// routesProducts.get("/category/:category_id", getProductPerCategoryControler);

export default routesProducts;
