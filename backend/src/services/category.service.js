import Category from '../models/category.js';

export const createCategory = async (categoryData) =>
{
    if (await Category.findOne({ name: categoryData.name })) {
    throw new Error("Category with same name exists ");
    } else {
        const CategoryDb = new Category(categoryData);
        CategoryDb.save()
        .then(() => {
            console.log("Category created");
        })
        .catch((err) => {
            console.log(err);
        });
        return CategoryDb;
    }
}
export const updateCategory = async (categoryId,categoryData) =>{
   const updatedCategory = await Category.findOneAndUpdate(
    { _id: categoryId },
    { $set: categoryData },
    { new: true }
  );
  return updatedCategory;
}
export const deleteCategory = async (categoryId) =>{
    const deletedCategory = await Category.deleteMany({ _id: categoryId });
    return deletedCategory.deletedCount > 0;
}
export const getCategory = async (categoryId) =>{
    const categoryDb = await Category.findById(categoryId);
    return categoryDb;
}

export const getAllCategories = () => {
  return Category.find({});
};

