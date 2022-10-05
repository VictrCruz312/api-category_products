import updateCategoryService from "../../services/updateCategory.service";

const updateCategoryControler = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const updateCategory = await updateCategoryService(name, id);

    return res
      .status(200)
      .json({ message: "categoria atualizada", category: updateCategory });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export default updateCategoryControler;
