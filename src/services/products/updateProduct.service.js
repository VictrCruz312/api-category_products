import database from "../../database";

const updateProductService = async (product, id) => {
  try {
    let query = `UPDATE products SET `;

    const keys = Object.keys(product);
    const values = Object.values(product);

    keys.forEach((key, index) => (query += `${key} = $${index + 1}, `));
    query = query.slice(0, -2);

    query = `${query} WHERE id = $${keys.length + 1}`;
    const res = await database.query(
      `${query}
        RETURNING *`,
      [...values, id]
    );
    return res.rows[0];
  } catch (error) {
    throw new Error(error);
  }
};

export default updateProductService;
