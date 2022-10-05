const getProductControler = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await getProductService(id);
    return res.status(200).json(product);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export default getProductControler;
