import createCategoryService from "../../services/categories/createCategory.service";

const createCategoryControler = async (req, res) => {
  try {
    const { name } = req.body;

    const category = await createCategoryService(name);

    return res
      .status(201)
      .json({ message: "category created", category: category });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export default createCategoryControler;
