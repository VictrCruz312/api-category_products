import getProductPerCategoryService from "../../services/products/getProductPerCategory.service";

const getProductPerCategoryControler = async (req, res) => {
  try {
    const { category_id } = req.params;

    const products = await getProductPerCategoryService(category_id);

    return res.status(200).json(products);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export default getProductPerCategoryControler;
