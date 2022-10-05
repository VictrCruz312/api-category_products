import database from "../../database";

const getProductPerCategoryService = async (category_id) => {
  try {
    const res = await database.query(
      ` SELECT
            pr.name,
            pr.price,
            ca.name category
        FROM
            products pr
        JOIN
            categories ca ON pr.category_id = ca.id
        WHERE
            pr.category_id = $1`,
      [category_id]
    );
    return res.rows;
  } catch (error) {
    throw new Error(error);
  }
};

export default getProductPerCategoryService;
