import database from "../../database";

const deleteCategoryService = async (id) => {
  try {
    const res = await database.query(
      ` DELETE FROM
            category
        WHERE
            id=$1`,
      [id]
    );
    return "categoria deletada";
  } catch (error) {
    throw new Error(error);
  }
};

export default deleteCategoryService;
