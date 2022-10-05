import createProductService from "../../services/products/createProduct.service";

const createProductControler = async (req, res) => {
  try {
    const { name, price, category_id } = req.body;

    const product = await createProductService(name, price, category_id);

    return res
      .status(201)
      .json({ message: "criado com sucesso", product: product });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export default createProductControler;
