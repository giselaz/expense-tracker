import { validateCreateCategory } from "../validations/category";
import *  as CategoryService from "../services/category.service";

export const createCategory = async (req, res) => {
  const { error } = validateCreateCategory(req.body);
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