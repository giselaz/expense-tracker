import axiosInstance from "../util/axiosInstance";

const getAllCategories = async () => {
    const response = await axiosInstance.get("/categories");
    const result = await response.data;
    if (!result.ok) {
      throw new Error("No categories found");
    } 
    return result.data; 
};

const createCategory = async (categoryData) => {
  try {
    const response = await axiosInstance.post("/categories", categoryData);
    return response.data;
  } catch (error) {
    console.error("Error creating category:", error);
    throw error;
  }
};

const updateCategory = async (categoryId, categoryData) => {
  try {
    const response = await axiosInstance.put(`/categories/${categoryId}`, categoryData);
    return response.data;
  } catch (error) {
    console.error("Error updating category:", error);
    throw error;
  }
};

const deleteCategory = async (categoryId) => {
  try {
    const response = await axiosInstance.delete(`/categories/${categoryId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting category:", error);
    throw error;
  }
};

export {
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory
};