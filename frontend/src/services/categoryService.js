import axiosInstance from "../util/axiosInstance";

const getAllCategories = async () => {
  const response = await axiosInstance.get("/categories");
  return response.data;
};

const createCategory = async (categoryData) => {
  const response = await axiosInstance.post("/categories", categoryData);
  return response.data;
}

const updateCategory = async (categoryId, categoryData) => {    
  const response = await axiosInstance.put(`/categories/${categoryId}`, categoryData);
  return response.data;
};

const deleteCategory = async (categoryId) => {
  const response = await axiosInstance.delete(`/categories/${categoryId}`);
  return response.data;
};

export {
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory
};