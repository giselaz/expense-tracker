import express from "express";
var route = express.Router();
import * as CategoryController from "../controllers/category.controller.js";

// get all categories
route.get("/", CategoryController.getAllCategories);
// add category
route.post(
  "/",
  CategoryController.createCategory 
);
// route.patch(
//   "/:categoryId",
//   CategoryController.updateCategory
// );
// delete category 
// route.delete(
//   "/:categoryId",
//   CategoryController.deleteCategory
// );
export default route;
