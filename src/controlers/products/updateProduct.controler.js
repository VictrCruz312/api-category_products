import updateProductService from "../../services/products/updateProduct.service";

const updateProductControler = async (req, res) => {
  try {
    const { id } = req.params;
    const product = { ...req.body };

    const updateProduct = await updateProductService(product, id);

    return res
      .status(200)
      .json({ message: "produto atualizado", product: updateProduct });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export default updateProductControler;
