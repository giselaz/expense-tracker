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


export const getCategory = async (categoryId) =>{
    const categoryDb = await Category.findById(categoryId);
    return categoryDb;
}

export const getAllCategories = () => {
  return Category.find({});
};

