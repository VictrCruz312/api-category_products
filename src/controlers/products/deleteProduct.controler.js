import deleteProductService from "../../services/products/deleteProduct.service";

const deleteProductControler = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await deleteProductService(id);

    return res.status(204).json({ message: deleted });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export default deleteProductControler;
