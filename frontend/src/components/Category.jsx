import Card from "../ui/CustomCard";
import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../services/categoryService";
import Modal from "../ui/Modal";
import { useState } from "react";
import CreateCategoryForm from "./CreateCategoryForm";
import { useCategories } from "../context/categoryContext";

function Category() {
  const [showModal, setShowModal] = useState(false);
    const { categories, isLoading, isError, error } = useCategories();

  if (isLoading) return <div>Loading categories...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="category-container  align-items-center mt-4">
      <div className="category-header mb-4">
        <h2 style={{ textAlign: "center" }}>Categories</h2>
        <button
          className="btn btn-primary mt-2"
          onClick={() => setShowModal(true)}
        >
          Add Category
        </button>
      </div>
      <div className="category-list d-flex flex-wrap justify-content-start gap-3 mt-4">
        {categories.map((category) => (
          <Card key={category._id} title={category.name} id={category._id} />
        ))}
      </div>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        title="Create Category"
      >
        <CreateCategoryForm onClose={() => setShowModal(false)} />
      </Modal>
    </div>
  );
}

export default Category;
