const updateProductControler = (req, res) => {
  try {
    return "error";
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export default updateProductControler;
