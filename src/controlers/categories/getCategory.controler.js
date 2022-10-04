import getCategoryService from "../../services/categories/getCategory.service";

const getCategoryControler = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await getCategoryService(id);
    return res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export default getCategoryControler;
