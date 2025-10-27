import * as   CategoryValidation from "../validations/category.js";
import * as CategoryService from  "../services/category.service.js";

export const createCategory = async (req, res) => { 
  const { error } = CategoryValidation.validateCreateCategory(req.body);
  if (error) {
    res.status(400).json({ ok: false, error: error.details[0].message });
  } else {
    try {
      const category = await CategoryService.createCategory(req.body);
      res.status(200).json({ ok: true, data: category });
    } catch (err) {
     
    }
  }
};

export const getAllCategories = async (req, res) => {
  try {
    const categories = await CategoryService.getAllCategories();
    res.status(200).json({ ok: true, data: categories });
  } catch (err) {
    res.status(500).json({ ok: false, error: "Internal Server Error" });
  }
}

export const updateCategory = async (req, res) => {
  const { error } = CategoryValidation.validateUpdateCategory(req.body);
  if (error) {
    res.status(400).json({ ok: false, error: error.details[0].message });
  } else {
    try {
      const category = await CategoryService.updateCategory(req.params.categoryId, req.body);
      res.status(200).json({ ok: true, data: category });
    } catch (err) {
      res.status(500).json({ ok: false, error: "Internal Server Error" });
    }
  }
}

export const deleteCategory = async (req, res) => { 
  try {
    await CategoryService.deleteCategory(req.params.categoryId);
    res.status(200).json({ ok: true, data: "Category deleted successfully" });
  } catch (err) {
    res.status(500).json({ ok: false, error: "Internal Server Error" });
  }
}