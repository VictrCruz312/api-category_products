import getProductsService from "../../services/products/getProducts.service";

const getProductsControler = async (req, res) => {
  try {
    const products = await getProductsService();

    return res.status(200).json(products);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export default getProductsControler;
