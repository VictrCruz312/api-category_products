import deleteCategoryService from "../../services/categories/deleteCategory.service";

const deleteCategoryControler = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await deleteCategoryService(id);

    res.status(204).json({ message: deleted });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export default deleteCategoryControler;
