import getCategoriesService from "../../services/categories/getCategories.service";

const getCategoriesControler = async (req, res) => {
  try {
    const categories = await getCategoriesService();
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export default getCategoriesControler;
