import axios from "axios";

const getAllProducts = async () => {
  return await axios
    .get("/api/products/")
    .then((res) => {
      const { pagination, paginatedProduct: products } = res.data;
      return { pagination, products };
    })
    .catch((err) => {
      throw err;
    });
};

const getProductsByCategory = async (category: string) => {
  return await axios
    .get(`/api/products/${category}`)
    .then((res) => {
      const { pagination, paginatedProduct: products } = res.data;
      return { pagination, products };
    })
    .catch((err) => {
      throw err;
    });
};

export const productServices = {
  getAllProducts,
  getProductsByCategory,
};
